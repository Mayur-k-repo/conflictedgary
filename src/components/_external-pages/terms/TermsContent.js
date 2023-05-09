// material
import * as React from "react";
import { alpha, useTheme, styled } from "@material-ui/core/styles";
import {
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
  Stack,
} from "@material-ui/core";
import SvgIconStyle from "components/SvgIconStyle";

//
import { varFadeInUp, MotionInView } from "../../animate";
// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  padding: theme.spacing(12, 0, 0, 0),
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right",
  // maxWidth:"1140px",
  // margin:"auto",
  p: {
    fontSize: "14px",
  },
  [theme.breakpoints.down("xl")]: {
    padding: theme.spacing(6, 0, 0, 0),
  },
}));

const ContentStyle = styled("div")(({ theme }) => ({
  width: "100%",
  textAlign: "center",
  marginBottom: theme.spacing(10),
  [theme.breakpoints.up("md")]: {
    textAlign: "left",
    marginBottom: 0,
  },
}));

const UtilityStyle = styled("div")(({ theme }) => ({
  height: "500px",
  backgroundImage: "url(/images/Sans-titre-2021-12-10T015116.649.png)",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  // maxWidth:"1140px",
}));

const ringIcon = {
  height: "50px",
  width: "50px",
  margin: "auto",
  marginTop: "10px",
};

function createData(name, value) {
  return { name, value };
}

function useWindowSize() {
  const [size, setSize] = React.useState([0, 0]);
  React.useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}


// ----------------------------------------------------------------------

export default function TermsContent() {
  const [width, height] = useWindowSize();
  return (
    <RootStyle id="terms">
      <Container maxWidth="lg">
        <ContentStyle>
          <MotionInView variants={varFadeInUp}>
            <Grid
              container
              spacing={5}
              direction="row"
              justifyContent="space-between"
            >
              <Grid item xs={12}  className={"termsContent"} textAlign={"left"}>
                <Typography
                  variant="h2"
                  textAlign="center"
                  sx={{
                    mb: 3,
                    fontSize: [70 , 80 , 100],
                    fontFamily: "Formula Condensed !important",
                  }}
                >
                  Terms & Conditions
                </Typography>
                <Typography variant="paragraph" sx={{fontWeight: 500 }} paragraph={true} className={"terms-p"}>
                  <strong>THE AGREEMENT: </strong>
                  The use of this website and services on this website provided by ConflictedGarys
                  (hereinafter referred to as "Website") are subject to the following Terms & Conditions, all parts,
                  and sub-parts of which are specifically incorporated by reference here. This Agreement shall
                  govern the use of all pages on this website (hereinafter collectively referred to as "Website")
                  and any services provided by or on this Website ("Services").

                  <ol>
                    <li>
                      <Typography variant="h6">
                        DEFINITIONS
                      </Typography>
                      <Typography variant="paragraph"  paragraph={true}>
                        “Agreement” denotes to this Terms and Conditions and the Privacy Policy and other documents
                        provided to you by the Website.
                        ConflictedGarys is a collection of digital artworks (NFTs) running on the Ethereum block chain.
                        This website is only an interface allowing participants to purchase digital collectibles. Users
                        are entirely responsible for the safety and management of their own private Ethereum wallets and
                        validating all transactions and contracts generated by this website before approval.
                        <br/>
                          “<strong>We</strong>”, “<strong>us</strong>” and “<strong>our</strong>” are references to
                          CONFLICTEDGARYS.COM.
                          “<strong>User</strong>”, “<strong>You</strong>” and “your” denotes the person who is accessing
                          the website for taking or availing any service from us. User shall include the company,
                          partnership, sole trader, person, body corporate or association taking services of this
                          Website.
                          ”<strong>Website</strong>” shall mean and include <strong>ConflictedGarys.com</strong> and any
                          successor Website of the Company or any of its affiliates.
                          <br/>
                            <strong>Parties:</strong> Collectively, the parties to this Agreement (We and You) will be
                            referred to as Parties.
                            <strong>NFTs</strong> “NFTs” means <strong>Ethereum-based</strong> tokens or other similar
                            “non-fungible” token standard. NFTs are intended to be “non-fungible “tokens representing a
                            unique Collectible; however, certain NFTs may be fungible with one another (i.e., all such
                            NFTs are associated with the same Collectible Metadata) while being non-fungible with other
                            NFTs (i.e., such NFTs are associated with different Collectible Metadata).

                      </Typography>
                    </li>

                    <li>
                      <Typography variant="h6">
                        ASSENT &amp; ACCEPTANCE
                      </Typography>
                      <Typography paragraph={true}>
                        PLEASE READ THESE TERMS OF USE, OUR PRIVACY POLICY, AND ALL APPLICABLE SUPPLEMENTAL TERMS
                        (COLLECTIVELY, THE "TERMS") CAREFULLY, AS THEY CONTAIN TERMS AND CONDITIONS THAT IMPACT YOUR
                        RIGHTS, OBLIGATIONS AND REMEDIES IN CONNECTION WITH YOUR USE OF THE SERVICES AND CONTENT. FOR
                        EXAMPLE, THE TERMS INCLUDE:
                      </Typography>
                      <ul>
                        <li>
                          YOUR OBLIGATION TO COMPLY WITH ALL APPLICABLE LAWS AND REGULATIONS.
                        </li>

                        <li>
                          LIMITATIONS OF OUR LIABILITY TO YOU; AND
                        </li>

                        <li>
                          A REQUIREMENT THAT YOU PURSUE CLAIMS OR SEEK RELIEF AGAINST US (INCLUDING MONETARY,
                          INJUNCTIVE, AND DECLARATORY RELIEF) ON AN INDIVIDUAL BASIS, RATHER THAN AS A PARTICIPANT IN
                          ANY CLASS OR REPRESENTATIVE ACTION OR PROCEEDING.
                        </li>
                      </ul>



                      <Typography paragraph={true}>
                        YOUR ACCESS TO AND USE OF THE SERVICES IS CONDITIONED ON YOUR ACCEPTANCE OF AND COMPLIANCE WITH
                        ALL APPLICABLE TERMS. If you do not agree to these Terms or our Privacy Policy, then please
                        cease using the Services immediately. We reserve the right to change these Terms at any time
                        (see “Changes to these Terms” below.) By accessing, browsing and/or using the Services after
                        updates to these Terms have been posted, you agree to be bound by the updated Terms. THESE TERMS
                        AND OUR PRIVACY POLICY CONSTITUTE A BINDING AGREEMENT BETWEEN YOU AND CONFLICTEDGARYS.
                        <br/>
                          <strong>Consequences of Non-Compliance</strong>
                          <br/>
                            Your failure to comply with the Terms may result in the suspension or termination of your
                            account and/or access to the Services and may subject you to civil and criminal penalties.
                      </Typography>
                    </li>


                    <li>
                      <Typography variant="h6">
                        OWNERSHIP
                      </Typography>

                      <ol type="A">

                        <li><strong>You Own the NFT.</strong> Each ConflictedGarys is an NFT on the Ethereum blockchain.
                          When you purchase an NFT, you own the underlying ConflictedGarys, the Art, completely.
                          Ownership of the NFT is mediated entirely by the Smart Contract and the Ethereum Network: at
                          no point may we seize, freeze, or otherwise modify the ownership of any ConflictedGarys.
                        </li>
                        <li><strong>Personal Use.</strong> Subject to your continued compliance with these Terms,
                          ConflictedGarys grants you a worldwide, royalty-free license to use, copy, and display the
                          purchased Art, along with any extensions that you choose to create or use, solely for the
                          following purposes: (i) for your own personal, non-commercial use; (ii) as part of a
                          marketplace that permits the purchase and sale of your ConflictedGarys / NFT, provided that
                          the marketplace cryptographically verifies each ConflictedGarys owner’s rights to display the
                          Art for their ConflictedGarys to ensure that only the actual owner can display the Art; or
                          (iii) as part of a third party website or application that permits the inclusion, involvement,
                          or participation of your ConflictedGarys, provided that the website/application
                          cryptographically verifies each ConflictedGarys owner’s rights to display the Art for their
                          ConflictedGarys to ensure that only the actual owner can display the Art, and provided that
                          the Art is no longer visible once the owner of the ConflictedGarys leaves the
                          website/application.
                        </li>
                        <li><strong>Commercial Use.</strong> Subject to your continued compliance with these Terms,
                          ConflictedGarys grants you an unlimited, worldwide license to use, copy, and display the
                          purchased Art for the purpose of creating derivative works based upon the Art (“Commercial
                          Use”). Examples of such Commercial Use would e.g., be the use of the Art to produce and sell
                          merchandise products (T-Shirts etc.) displaying copies of the Art. For the sake of clarity,
                          nothing in this Section will be deemed to restrict you from (i) owning or operating a
                          marketplace that permits the use and sale of ConflictedGarys generally, provided that the
                          marketplace cryptographically verifies each ConflictedGarys owner’s rights to display the Art
                          for their ConflictedGarys to ensure that only the actual owner can display the Art; (ii)
                          owning or operating a third party website or application that permits the inclusion,
                          involvement, or participation of ConflictedGarys generally, provided that the third party
                          website or application cryptographically verifies each ConflictedGarys owner’s rights to
                          display the Art for their ConflictedGarys to ensure that only the actual owner can display the
                          Art, and provided that the Art is no longer visible once the owner of the Purchased
                          ConflictedGarys leaves the website/application; or (iii) earning revenue from any of the
                          foregoing.
                        </li>
                        <li><strong>Feedback.</strong> You may choose to submit comments, bug reports, ideas, or other
                          feedback about the Site, including without limitation about how to improve the Site
                          (collectively, “Feedback”). By submitting any Feedback via email at
                          feedback@conflictedgarys.com, you agree that we are free to use such Feedback in any way we
                          choose without additional compensation to you, and you hereby grant us a perpetual,
                          irrevocable, nonexclusive, worldwide license to incorporate and use the Feedback for any
                          purpose.
                        </li>

                      </ol>

                    </li>

                    <li>
                      <Typography variant="h6">PAYMENT</Typography>
                      <Typography paragraph={true}>
                        If you Select to purchase a NFT through the Site, any financial transactions that you engage in
                        will be conducted solely through the Ethereum network. We will have no insight into or control
                        over these payments or transactions, nor do we can reverse any transactions. We will have no
                        liability to you or to any third party for any claims or damages that may arise because of any
                        transactions that you engage or any other transactions that you conduct via the Ethereum
                        network.
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="h6">FEES AND TAXES</Typography>
                      <Typography paragraph={true}>
                        Neither ConflictedGarys nor any other ConflictedGarys Party is responsible for determining the
                        withholding, sales, use, value added, transfer or other taxes, together with any interest and
                        penalties imposed with respect thereto (“Taxes”), that apply to your NFT transactions. You agree
                        that you are solely responsible for determining what, if any, Taxes apply to your NFT
                        transactions and to withhold, collect, report, and remit the correct amounts of Taxes to the
                        appropriate taxing authorities
                      </Typography>
                    </li>

                    <li>
                      <Typography variant="h6">AGE RESTRICTION</Typography>
                      <Typography paragraph={true}>
                        you affirm that you are over the age of 18, as the platform is not intended for children under
                        18. if you are 13 or older but under the age of 18, or the legal age of majority where you
                        reside if that jurisdiction has an older age of majority, then you agree to review these terms
                        with your parent or guardian to make sure that both you and your parent or guardian understand
                        and agree to these terms. you agree to have your parent or guardian review and accept these
                        terms on your behalf. if you are a parent or guardian agreeing to the terms for the benefit of a
                        child over 13, then you agree to and accept full responsibility for that child’s use of the
                        platform, including all financial charges and legal liability that he or she may incur.
                      </Typography>
                    </li>


                    <li>
                      <Typography variant="h6">INTELLECTUAL PROPERTY</Typography>
                      <Typography paragraph={true}>
                        You agree that the Website and all Services provided by us are the property of ConflictedGarys,
                        including all copyrights, trademarks, trade secrets, patents, and other intellectual property
                        ("Our IP"). You agree that we own all rights, title, and interest in and to the Our IP and that
                        you will not use Our IP for any unlawful or infringing purpose. You agree not to reproduce or
                        distribute Our IP in any way, including electronically or via registration of any new
                        trademarks, trade names, service marks, or Uniform Resource Locators (URLs), without express
                        written permission from us.
                      </Typography>
                      <ol>
                        <li>To make the Website and Services available to you, you hereby grant us a royalty-free,
                          non-exclusive, worldwide license to copy, display, use, broadcast, transmit and make
                          derivative works of any content you publish, upload, or otherwise make available to the
                          Website ("Your Content"). We claim no further proprietary rights in your Content.
                        </li>
                        <li>If you feel that any of your intellectual property rights have been infringed or otherwise
                          violated by the posting of information or media by another of our users, please contact us at
                          feedback@conflictedgarys.com and let us know.
                        </li>
                      </ol>
                    </li>

                    <li>
                      <Typography variant="h6">USER OBLIGATIONS</Typography>
                      <Typography paragraph={true}>
                        As a user of the Website or Services, you may be asked to register with us. When you do so, you
                        will choose a user identifier, which may be your email address or another term, as well as a
                        password. You may also provide personal information, including, but not limited to, your name.
                        You are responsible for ensuring the accuracy of this information. This identifying information
                        will enable you to use the Website and Services. You must not share such identifying information
                        with any third party, and if you discover that your identifying information has been
                        compromised, you agree to notify us immediately in writing. An email notification will suffice.
                        You are responsible for maintaining the safety and security of your identifying information as
                        well as keeping us apprised of any changes to your identifying information. Providing false or
                        inaccurate information or using the Website or Services to further fraud or unlawful activity is
                        grounds for immediate termination of this Agreement.
                      </Typography>
                    </li>


                    <li>
                      <Typography variant="h6">ACCEPTABLE USE</Typography>
                      <Typography paragraph={true}>
                        You agree not to use the Website or Services for any unlawful purpose, or any purpose prohibited
                        under this clause. You agree not to use the Website or Services in any way that could damage the
                        Website, Services, or general business of ConflictedGarys.com.
                      </Typography>
                      <ul>
                        <li>You further agree not to use the Website or Services</li>
                        <li>To harass, abuse, or threaten others or otherwise violate any person's legal rights.</li>
                        <li>To violate any of our intellectual property rights or any third party.</li>
                        <li>To upload or otherwise disseminate any computer viruses or other software that may damage
                          the property of another.
                        </li>
                        <li>To perpetrate any fraud.</li>
                        <li>To engage in or create any unlawful gambling, sweepstakes, or pyramid scheme.</li>
                        <li>To publish or distribute any obscene or defamatory material.</li>
                        <li>To publish or distribute any material that incites violence, hate, or discrimination towards
                          any group or individual.
                        </li>
                        <li>To unlawfully gather information about others.</li>
                      </ul>

                    </li>

                    <li>
                      <Typography variant="h6">ASSUMPTION OF RISK</Typography>
                      <Typography paragraph={true}>
                        You accept and acknowledge each of the following:
                      </Typography>
                      <ul>
                        <li>To the extent that you sell your NFT, please be aware that the prices of NFTs are extremely
                          volatile and fluctuations in the prices of other NFTs and impact the price of your NFT both
                          positively and negatively. Given the volatility, NFTs such as NFT should not be considered an
                          investment. You assume all risks in that connection.
                        </li>
                        <li>Ownership of a NFT confers ownership of digital artwork only. Accordingly, no information on
                          this Site (or any other documents mentioned therein) is or may be advice or an invitation to
                          enter into an agreement for any investment purpose. Further, nothing on this Site qualifies or
                          is intended to be an offering of securities in any jurisdiction nor does it constitute an
                          offer or an invitation to purchase shares, securities, or other financial products. Due to the
                          artistic nature of the project, <strong>ConflictedGarys</strong> has not been registered with
                          or approved by any regulator in any jurisdiction. It remains your sole responsibility to
                          assure that the purchase of the NFT and the associated art follows laws and regulations in
                          your jurisdiction.
                        </li>
                        <li>You assume all risks associated with using an Internet-based currency, including, but not
                          limited to, the risk of hardware, software and Internet connections, the risk of malicious
                          software introduction, and the risk that third parties may obtain unauthorized access to
                          information stored within your wallet.
                        </li>
                        <li>NFTs, cryptocurrencies and blockchain technology are relatively new and the regulatory
                          landscape is unsettled. New regulations could negatively impact such technologies impacting
                          the value for your NFT. You understand and accept all risk in that regard.
                        </li>
                        <li>You assume all responsibility for any adverse effects of disruptions or other issues
                          impacting Ethereum or the Ethereum platform.
                        </li>
                      </ul>
                    </li>


                    <li>
                      <Typography variant="h6">INDEMNIFICATION</Typography>
                      <Typography paragraph={true}>
                        You agree to defend and indemnify us and any of our affiliates (if applicable) and hold us
                        harmless against any legal claims and demands, including reasonable attorney's fees, which may
                        arise from or relate to your use or misuse of the Website or Services, your breach of this
                        Agreement, or your conduct or actions. You agree that we shall be able to select its legal
                        counsel and may participate in its defense if we wish.
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="h6">EXCLUSION OF LIABILITY</Typography>
                      <Typography paragraph={true}>
                        You understand and agree that we (A) do not guarantee the accuracy, completeness, validity, or
                        timeliness of information listed by us or any third parties; and (B) shall not be responsible
                        for any materials posted by us or any third party. You shall use your judgment, caution, and
                        common sense in evaluating any prospective methods or offers and any information provided by us
                        or any third party.
                        Further, we shall not be liable for direct, indirect consequential, or any other form of loss or
                        damage that may be suffered by a user using the ConflictedGarys.com Website including loss of
                        data or information or any kind of financial or physical loss or damage.
                        In no event shall ConflictedGarys, nor its Owner, directors, employees, partners, agents,
                        suppliers, or affiliates, be accountable for any indirect, incidental, special, eventful, or
                        exemplary costs, including without limitation, loss of proceeds, figures, usage, goodwill, or
                        other intangible losses, consequential from (i) your use or access of or failure to access or
                        use the Service; (ii) any conduct or content of any third party on the Service; (iii) any
                        content attained from the Service; and (iv) unlawful access, use or alteration of your
                        transmissions or content, whether or not based on guarantee, agreement, domestic wrong
                        (including carelessness) or any other lawful concept, whether or not we've been aware of the
                        possibility of such damage, and even if a cure set forth herein is originated to have futile of
                        its important purpose.
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="h6">SERVICE INTERRUPTIONS</Typography>
                      <Typography paragraph={true}>
                        We may need to interrupt your access to the Website to perform maintenance or emergency services
                        on a scheduled or unscheduled basis. You agree that your access to the Website may be affected
                        by unanticipated or unscheduled downtime, for any reason, but that we shall have no liability
                        for any damage or loss caused because of such downtime.
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="h6">TERM, TERMINATION & SUSPENSION</Typography>
                      <Typography paragraph={true}>
                        We may terminate this Agreement with you at any time for any reason, with or without cause. We
                        specifically reserve the right to terminate this Agreement if you violate any of the terms
                        outlined herein, including, but not limited to, violating the intellectual property rights of us
                        or a third party, failing to comply with applicable laws or other legal obligations, and/or
                        publishing or distributing illegal material. If you have registered for an account with Us, you
                        may also terminate this Agreement at any time by contacting us and requesting termination. At
                        the termination of this Agreement, any provisions that would be expected to survive termination
                        by their nature shall remain in full force and effect.
                      </Typography>
                    </li>

                    <li>

                      <Typography variant="h6">“AS IS” and “AS AVAILABLE” Disclaimer</Typography>
                      <Typography paragraph={true}>
                        The Service is provided to You “AS IS” and “AS AVAILABLE” and with all faults and defects
                        without warranty of any kind. To the maximum extent permitted under applicable law, the Company,
                        on its own behalf and on behalf of its Affiliates and its and their respective licensors and
                        service providers, expressly disclaims all warranties, whether express, implied, statutory or
                        otherwise, with respect to the Service, including all implied warranties of merchantability,
                        fitness for a particular purpose, title and non-infringement, and warranties that may arise out
                        of course of dealing, course of performance, usage or trade practice. Without limitation to the
                        foregoing, the Company provides no warranty or undertaking, and makes no representation of any
                        kind that the Service will meet Your requirements, achieve any intended results, be compatible
                        or work with any other software, applications, systems, or services, operate without
                        interruption, meet any performance or reliability standards or be error free or that any errors
                        or defects can or will be corrected.<br/>
                        Without limiting the foregoing, neither the Company nor any of the company’s provider makes any
                        representation or warranty of any kind, express or implied: (i) as to the operation or
                        availability of the Service, or the information, content, and materials or products included
                        thereon; (ii) that the Service will be uninterrupted or error-free; (iii) as to the accuracy,
                        reliability, or currency of any information or content provided through the Service; or (iv)
                        that the Service, its servers, the content, or e-mails sent from or on behalf of the Company are
                        free of viruses, scripts, trojan horses, worms, malware, timebombs or other harmful
                        components.<br/>
                        You accept the inherent security risks of providing information and dealing online over the
                        internet and agree that we have no liability or responsibility for any breach of security unless
                        it is due to our willful misconduct.<br/>
                        We will not be responsible or liable to you for any losses you incur as the result of your use
                        of the Ethereum network, nor do we have no control over and make no guarantees regarding any
                        smart contracts.<br/>
                        Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on
                        applicable statutory rights of a consumer, so some or all the above exclusions and limitations
                        may not apply to You. But in such a case the exclusions and limitations set forth in this
                        section shall be applied to the greatest extent enforceable under applicable law.
                      </Typography>

                    </li>
                    <li>
                      <Typography variant="h6">NO WARRANTIES</Typography>
                      <Typography paragraph={true}>
                        You agree that your use of the Website and Services is at your sole and exclusive risk and that
                        any Services provided by us are on an "As Is" basis. We hereby expressly disclaim any express or
                        implied warranties of any kind, including, but not limited to the implied warranty of fitness
                        for a particular purpose and the implied warranty of merchantability. We make no warranties that
                        the Website or Services will meet your needs or that the Website or Services will be
                        uninterrupted, error-free, or secure. We also make no warranties as to the reliability or
                        accuracy of any information on the Website or obtained through the Services. You agree that any
                        damage that may occur to you, through your computer system, or because of the loss of your data
                        from your use of the Website or Services is your sole responsibility and that we are not liable
                        for any such damage or loss.
                      </Typography>
                    </li>

                    <li>
                      <Typography variant="h6">LIMITATION ON LIABILITY</Typography>
                      <Typography paragraph={true}>
                        We are not liable for any damages that may occur to you because of your use of the Website or
                        Services, to the fullest extent permitted by law. This section applies to any claims by you,
                        including, but not limited to, lost profits or revenues, consequential or punitive damages,
                        negligence, strict liability, fraud, or torts of any kind.
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="h6">CHANGES TO THE TERMS AND CONDITIONS</Typography>
                      <Typography paragraph={true}>
                        We may make changes to the Terms at our discretion. Please check these Terms periodically for
                        changes. Any changes to the Terms will apply on the date that they are made, and your continued
                        access to or use after the Terms have been updated will constitute your binding acceptance of
                        the updates. If you do not agree to any revised Terms, you may not access or use the Site.
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="h6">DISPUTE RESOLUTION; ARBITRATION</Typography>
                      <Typography paragraph={true}>
                        All disputes arising out of or in connection with these Terms, including without limitation your
                        access or use of the Site, or to any products sold or distributed through the Site, will be
                        referred to and finally resolved by arbitration under the rules of the American Arbitration
                        Association. The case will be adjudicated by a single arbitrator and will be administered by the
                        American Arbitration Association in accordance with its applicable rules. Each party will cover
                        its own fees and costs associated with the arbitration proceedings. The place of arbitration
                        will be Los Angeles, California. The award of the arbitrator will be final and binding, and any
                        judgment on the award rendered by the arbitrator may be entered in any court of competent
                        jurisdiction. Notwithstanding the foregoing, we may seek and obtain injunctive relief in any
                        jurisdiction in any court of competent jurisdiction.<br/>
                        WITH RESPECT TO ANY DISPUTE ARISING OUT OF OR RELATED TO THESE TERMS, INCLUDING WITHOUT
                        LIMITATION DISPUTES RELATED TO THE SITE OR ANY PRODUCTS SOLD OR DISTRIBUTED THROUGH THE SITE, OR
                        THE SMART CONTRACTS: (I) YOU HEREBY EXPRESSLY GIVE UP YOUR RIGHT TO HAVE A TRIAL BY JURY; AND
                        (II) YOU HEREBY EXPRESSLY GIVE UP YOUR RIGHT TO PARTICIPATE AS A MEMBER OF A CLASS OF CLAIMANTS
                        IN ANY LAWSUIT, INCLUDING BUT NOT LIMITED TO CLASS ACTION LAWSUITS INVOLVING ANY SUCH DISPUTE.
                      </Typography>
                    </li>


                  </ol>
                </Typography>


              </Grid>
            </Grid>
          </MotionInView>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}