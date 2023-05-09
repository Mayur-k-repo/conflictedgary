import { Icon } from '@iconify/react';
import homeFill from '@iconify/icons-eva/home-fill';
import fileFill from '@iconify/icons-eva/file-fill';
// routes
import { PATH_DASHBOARD } from '../../routes/paths';

// ----------------------------------------------------------------------

const ICON_SIZE = {
  width: 22,
  height: 22
};

const menuConfig = [
  // {
  //   title: 'HOME',
  //   path: '/',
  //   // icon: <Icon icon={homeFill} {...ICON_SIZE} />
  // },
  {
    title: 'THE PROJECT',
    path: '/#about',
    // icon: <Icon icon={homeFill} {...ICON_SIZE} />
  },
  // {
  //   title: 'UTILITIES',
  //   path: '/#benefit',
  //   // icon: <Icon icon={homeFill} {...ICON_SIZE} />
  // },
  {
    title: 'ART',
    path: '/#arts',
    // icon: <Icon icon={homeFill} {...ICON_SIZE} />
  },
  {
    title: 'THE GRILLING',
    path: '/#roadmap',
    // icon: <Icon icon={homeFill} {...ICON_SIZE} />
  },
  // {
  //   title: 'FAQ',
  //   path: '/#faq',
  //   // icon: <Icon icon={homeFill} {...ICON_SIZE} />
  // },
  {
    title: 'TEAM',
    path: '/#team',
    // icon: <Icon icon={homeFill} {...ICON_SIZE} />
  },
  {
    title: 'MINT',
    path: '/mint',
    // icon: <Icon icon={homeFill} {...ICON_SIZE} />
  },
  // {
  //   title: 'DOCS',
  //   path: 'https://docs.conflictedgarys.com/  ',
  //   // icon: <Icon icon={homeFill} {...ICON_SIZE} />
  // }

  // { title: 'Dashboard', path: PATH_DASHBOARD.root, icon: <Icon icon={fileFill} {...ICON_SIZE} /> }
];

export default menuConfig;
