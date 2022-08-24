import Link from 'next/link';
import { Fragment } from 'react';
import * as CUI from '@chakra-ui/react';
import OpenLogo from 'public/images/icons/logo.svg';

const Header = () => {
  return (
    <Fragment>
      <Link passHref href="/">
        <CUI.Link>
          <CUI.VisuallyHidden>Open Política</CUI.VisuallyHidden>
          <OpenLogo />
        </CUI.Link>
      </Link>
      <CUI.Heading as="h1">Proyecto de Open política</CUI.Heading>
    </Fragment>
  );
};

export default Header;
