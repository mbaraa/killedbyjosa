import { FC } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

// Import Styled Components
import { FooterContainer, FlexWrap } from "components/Footer/Footer.atoms";
import Link from "next/link";

const SocialLink: FC<{ url: string; imgSrc: string; altText: string }> = ({
  url,
  imgSrc,
  altText,
}) => {
  const style = {
    border: "none",
  };

  return (
    <Link
      href={url}
      passHref
      css={{
        border: "none",
      }}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        css={{
          width: "24px",
          height: "24px",
        }}
        width="24px"
        height="24px"
        src={imgSrc}
        alt={altText}
      />
    </Link>
  );
};

const CopyNotice = styled.div(() =>
  css({
    fontSize: "0.75em",
    margin: "30px 0 20px 0",
    textAlign: "center",
  }),
);

const Title = styled.div(() =>
  css({
    color: "#fafafa",
    fontSize: "2.5em",
    fontWeight: "lighter",
  }),
);

const FooterTitle = styled.div(() =>
  css({
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    paddingBottom: "20px",
  }),
);

const SocialWrapper = styled.div(() =>
  css({
    display: "flex",
    justifyContent: "center",
    padding: "15px 0",

    ["a"]: {
      display: "block",
      margin: "0 10px",
    },
  }),
);

const Footer = () => (
  <>
    <FooterContainer>
      <FlexWrap>
        <FooterTitle>
          <div
            css={{
              marginRight: "10px",
            }}
          >
            <img
              height="60px"
              width="60px"
              src="https://killedbyjosa.org/tombstone-alt.svg"
              alt="Tombstone"
            />
          </div>
          <Title>Killed by JOSA</Title>
        </FooterTitle>
        <div>
          <p>
            Killed by JOSA&nbsp;
            <Link href="https://josa.ngo">
              (Jordan Open Source Association)
            </Link>
            &nbsp; is the JOSA graveyard; a free and open source list of
            discontinued JOSA services, products, and websites. We aim to be a
            source of factual information about the history surrounding
            JOSA&apos;s dead projects.
          </p>
          <p>
            <Link href="https://github.com/mbaraa/killedbyjosa">GitHub</Link>. A
            project by&nbsp;
            <Link
              href="https://mbaraa.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Baraa Al-Masri
            </Link>
            .
          </p>
          <p>
            This project is originally forked from&nbsp;
            <Link href="https://github.com/codyogden/killedbygoogle">
              Killed by Google
            </Link>
            &nbsp;and modified to be what you&apos;re seeing (Killed by JOSA)
          </p>
          <p>
            Press inquiries and other assorted death threats?
            <br />
            Spam me at&nbsp;
            <Link href="mailto:pub@mbaraa.com">pub@mbaraa.com</Link>.
          </p>
        </div>
        <Link href="https://github.com/mbaraa/killedbyjosa/blob/main/LICENSE">
          &copy; {new Date().getFullYear()} Cody Ogden, Baraa Al-Masri.
        </Link>
        <SocialWrapper>
          <SocialLink
            url="https://github.com/mbaraa/killedbyjosa"
            altText="GitHub"
            imgSrc="https://killedbyjosa.org/github.svg"
          />
        </SocialWrapper>
      </FlexWrap>
    </FooterContainer>
  </>
);
export default Footer;
