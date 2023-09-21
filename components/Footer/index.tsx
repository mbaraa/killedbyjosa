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
    <Link href={url} passHref>
      <a
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
      </a>
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
              src="https://static.killedbyjosa.com/com/tombstone-alt.svg"
              alt="Tombstone"
            />
          </div>
          <Title>Killed by JOSA</Title>
        </FooterTitle>
        <div>
          <p>
            Killed by JOSA is the JOSA graveyard; a free and open source list of
            discontinued JOSA services, products, devices, and apps. We aim to
            be a source of factual information about the history surrounding
            JOSA&apos;s dead projects.
          </p>
          <p>
            <a
              href="https://github.com/mbaraa/killedbyjosa/graphs/contributors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contributors
            </a>
            &nbsp;from around the world help compile, research, and maintain the
            information about dying and dead JOSA products. You can join the
            discussion on&nbsp;
            <a href="https://github.com/mbaraa/killedbyjosa">GitHub</a>. A
            project by&nbsp;
            <a
              href="https://mbaraa.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cody Ogden
            </a>
            .
          </p>
          <p>
            Press inquiries and other assorted death threats?
            <br />
            Spam me at&nbsp;
            <a href="mailto:pub@mbaraa.com">pub@mbaraa.com</a>.
          </p>
        </div>
        <CopyNotice>
          <a href="https://github.com/mbaraa/killedbyjosa/blob/main/LICENSE">
            &copy; 2023 Cody Ogden, Baraa Al-Masri.
          </a>
          &nbsp;-&nbsp;
          <a
            href="https://analytics.kbg.rip"
            target="_blank"
            rel="noopener noreferrer"
          >
            Analytics
          </a>
        </CopyNotice>
        <SocialWrapper>
          <SocialLink
            url="https://github.com/mbaraa/killedbyjosa"
            altText="GitHub"
            imgSrc="https://static.killedbyjosa.com/com/github.svg"
          />
        </SocialWrapper>
      </FlexWrap>
    </FooterContainer>
  </>
);
export default Footer;
