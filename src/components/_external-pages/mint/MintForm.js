import * as React from "react";
import { alpha, useTheme, styled } from "@material-ui/core/styles";
import {nanoid} from "nanoid";
import {ABI} from "ABI/Contract";
import keccak256 from "keccak256";
import {MerkleTree} from "merkletreejs";
import Web3 from "web3";
import {
    Alert,
    Box,
    Grid,
    Button,
    Container,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    List,
    ListItem,
    Divider,
    ListItemText,
    ListItemAvatar,
    ListItemButton,
    ListItemIcon,
    Stack, TextField, Link, FormControl, createStyles
} from "@material-ui/core";
import { useMetaMask } from "metamask-react";
import {makeStyles} from "@material-ui/styles";

const contractAddress = "0x00d10baf6f453bd9141d6d5b8ff048908756e7de";
const networkId = 4;
const chainExplorer = "https://rinkeby.etherscan.io/";
const  hiddenGary= {
    "&": {
        position:"relative",
        background:"#7B1B16",
        clipPath:'circle(230px at 230px center)',
        borderRadius:"0 15px 15px 0"
    },
    "&::after" : {
        position:"absolute",
        content:"''",
        width:"100%",
        background: 'url(/images/hiddenGary.png)',
        backgroundSize:'contain',
        height:"100%",
        minHeight:"400px",
        backgroundRepeat:"no-repeat",
        backgroundPosition:"center center",
        bottom:0,
        left:0

    }
};
const useStyles = makeStyles((theme) =>
    createStyles({
        input: {
            height: 60
        },
        button: {
            width:175
        },
        mb: {
            marginBottom:30
        },
        messageContainer: {
            maxHeight:"300px",
            display:"block",
            overflowX:"hidden",
            overflowY:"auto"
        },

        bShadow:{
            animation:`$blink 2000ms infinite 2000ms alternate`,
            animationTimingFunction: "cubic-bezier(0.48, 0.23, 0.99, 0.99)"
        },
        '@keyframes blink': {
            "0%": {
                boxShadow:"0px 0px 5px rgba(255,255,255,0)"
            },
            "35%": {
                boxShadow:"0px 0px 20px rgba(255,255,255,0.5)"
            },
            "55%": {
                boxShadow:"0px 0px 10px rgba(255,255,255,0.3)"
            },
        }
    })
);

const ContentStyle = styled("div")(({ theme }) => ({
    maxWidth: 780,
    margin: 'auto',
    display: 'flex',
    minHeight: '50vh',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: theme.spacing(12, 0)
}));

export default function MintForm() {
    const mintPrice = 0.08;
    const qtyRef = React.useRef(1);
    const { status, connect, account, chainId, ethereum } = useMetaMask();
    const [totalPrice,setTotalPrice] = React.useState(mintPrice * 1);
    const [messages,setMessages] = React.useState([]);

    const web3 = new Web3(ethereum);
    const contract = new web3.eth.Contract(ABI,contractAddress);

    const classes = useStyles();



    function validation() {
        if (status === 'unavailable') return  <Alert  className={classes.mb} severity="warning">Metamask not available.</Alert>;
        if (status !== "connected") return <Alert  className={classes.mb} severity="warning">Please Connect your Wallet!</Alert>;
        if (chainId != networkId) return <Alert  className={classes.mb} severity="warning">Wrong network, Please switch your network to Ehtereum Mainnet.</Alert>;
    }

    function message(message,type) {
        setMessages(oldMessages=>[{message:message,type:type},...oldMessages])
    }

    function showMessages() {
        return (
            <div className={classes.messageContainer}>
                {
                    messages.map(message=>(
                        <Alert severity={message.type} className={classes.mb} key={nanoid()}>{message.message}</Alert>
                    ))
                }
            </div>
        )
    }

    async function mint() {
        const publicSaleStatus = await contract.methods.getPublicSaleStatus().call();
        const preSaleStatus = await contract.methods.getPreSaleStatus().call();
        const costBN = Web3.utils.toBN(Web3.utils.toWei(mintPrice.toString()).toString());
        const value = qtyRef.current.value;
        const suggestedPrice = costBN.muln(parseInt(value.toString()));
        setMessages([]);
        if (qtyRef.current.value <= 0) return message("Invalid quantity.","error");
        if (publicSaleStatus || preSaleStatus) {
            let method;
            if (publicSaleStatus === true && preSaleStatus === false) {
                method =  contract.methods.mint(value);
            } else {
                const merkleTree = await getMerkleTree();
                const claimAddress =keccak256(account);
                console.log("0x"+merkleTree.getRoot().toString("hex"));
                const merkleProof =  merkleTree.getHexProof(claimAddress);
                console.log(merkleProof);
                const isWhiteListed = await contract.methods.verify_merkel_proof(merkleProof).call({
                    from:account
                });
                if (!merkleProof || merkleProof.length <=0 || isWhiteListed != true) return message("You are not whitelisted!","warning");
                method = contract.methods.presaleMint(value,merkleProof);
            }

            await method.send({
                value: suggestedPrice.toString(),
                from: account
            })
                .on('transactionHash', (hash) => {
                return message([`Transaction submitted. Here's the Hash:`, <Link href={`${chainExplorer}/tx/${hash}`}>{hash}</Link>], 'info')
            })
                .on('error', (error) => {
                return message(`Transaction Failed,${error.message}`, 'error');
            })
                .then((receipt) => {
                return message(`Transaction is complete.`, 'info');
            })
        } else {
            return message(`Minting function is not active yet.`, 'warning');
        }


    }

    async function getMerkleTree() {
        const response = await fetch(`/merkleProof/list.json`);
        const list = await response.json()
        const leafNodes = list.map(address=>keccak256(address));
        return new MerkleTree(leafNodes,keccak256,{sortPairs:true});

    }
    function calculateTotalValue() {
        let value = qtyRef.current.value;
        if (value >= 1) {
            setMessages([]);
            setTotalPrice((value * mintPrice).toFixed(2));
        } else {
            setTotalPrice(0);
            setMessages([]);
            return message(`Invalid quantity.`,'error');
        }
    }
    if (status === 'connected') {
        return (
            <div style={{marginTop:"200px",marginBottom:"50x",textAlign:"center"}}>

                <Container
                    maxWidth="xs" style={{
                        background:"#1c1c1c",
                        borderRadius:"15px",
                        backgroundSize:"cover",
                        height:"350px",
                        justifyContent:"center",
                        display:"flex",
                        padding:0,
                        maxWidth:740
                    }}
                className={classes.bShadow}>

                <Grid container >
                    <Grid item xs={6} style={{margin:"0 auto", textAlign:"left", padding:"25px"}}>
                    <Typography
                        variant="h2"
                        textAlign="left"
                        sx={{
                            width:"100%",
                            fontSize: [40 , 50 , 80],
                            lineHeight:["40px","50px","80px"],
                            fontFamily: "Formula Condensed !important",
                            marginBottom:"15px"
                        }}>
                        Mint Now!
                    </Typography>
                    <FormControl>
                        <TextField
                            id="qry-input"
                            name="quantity"
                            label="Quantity"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            InputProps={{inputProps: {min: 1}}}
                            defaultValue={1}
                            onChange={calculateTotalValue}
                            inputRef={qtyRef}
                            className={classes.input}
                        />
                    </FormControl>

                    <Typography style={{marginBottom:"15px"}}>Total Price: Ξ {totalPrice} </Typography>
                    <Typography style={{marginBottom:"15px"}}>
                        Contract Address: <Link
                        href={`${chainExplorer}address/${contractAddress}`}>{contractAddress}</Link>
                    </Typography>
                        <Button
                            type="submit"
                            variant="contained"
                            className={classes.button}
                            onClick={mint}
                            color="primary">
                            MINT
                        </Button>
                    </Grid>
                    <Grid item xs={6}  sx={{...hiddenGary}}>
                    </Grid>
                </Grid>
                </Container>
                <ContentStyle maxWidth="xs" style={{padding:"0px 20px",wordBreak: "break-all",textAlign:"left",minHeight:"unset",marginTop:30}}>
                    {validation()}
                    {showMessages()}
                </ContentStyle>
            </div>
        );
    } else {
        return (
            <div style={{marginTop:"200px",marginBottom:"50x",textAlign:"center"}}>

                <Container
                    maxWidth="xs" style={{
                    background:"#1c1c1c",
                    borderRadius:"15px",
                    backgroundSize:"cover",
                    height:"350px",
                    justifyContent:"center",
                    display:"flex",
                    padding:0,
                    maxWidth:740
                }}
                    >
            <Grid container className={classes.mb} style={{textAlign:"center", background:"#1c1c1c",height:"350px"}}>
                <Grid item xs={6} style={{display:"flex",justifyContent:"center",alignContent:"center"}}>
                    <div style={{margin:"auto"}}>
                    <Button   variant="contained" color="primary" onClick={connect} style={{textTransform:"unset"}} >
                        Connect Wallet
                    </Button>
                    </div>
                </Grid>
                <Grid item xs={6}  sx={{...hiddenGary}}></Grid>

            </Grid>
                </Container>
            </div>
        )
    }
}