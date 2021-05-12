import React from "react";
import { Box, Icon, Text, Stack, Link, chakra } from "@chakra-ui/react";
import { IoLogoTwitter, IoLogoLinkedin } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { DiGithubBadge } from "react-icons/di";

const FooterLink = ({ icon, href, label }) => (
  <Link display="inline-block" href={href} aria-label={label} isExternal>
    <Icon as={icon} fontSize="xl" color="gray.400" />
  </Link>
);

const links = [
  {
    icon: DiGithubBadge,
    label: "GitHub",
    href: "https://github.com/th-rpy",
  },
  {
    icon: IoLogoTwitter,
    label: "Twitter",
    href: "https://twitter.com/thesegunadebayo",
  },
  {
    icon: IoLogoLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/thamer-saraei-472300124/",
  },
  {
    icon: MdEmail,
    label: "Email",
    href: "mailto:thamer.saraei@polymtl.ca",
  },
  {
    icon: FaYoutube,
    label: "YouTube",
    href: "https://www.youtube.com/channel/UC8Dt8pO_EqhP9unfnMd-64A/videos",
  },
];

export const Footer = () => (
  <div as="footer" mt={12} textAlign="center">
    <Stack mt={4} direction="row" spacing="12px" justify="center">
      <Text fontSize="md" px="1rem" className="i" color="gray.600">
        <strong>
          Made with Love 💜 using{" "}
          <a href="https://reactjs.org/" rel="noreferrer" target="_blank">
            ReactJs.
          </a>
        </strong>
      </Text>
    </Stack>
    <Stack as="footer" mt={12} textAlign="center">
      <Text px="1rem" className="i" color="gray.500" fontSize="md" isTruncated>
        <strong> Thank you for support!</strong>
        <br></br>
      </Text>
    </Stack>
    <Text>
      <Stack mt={4} direction="row" spacing="12px" justify="center">
        {links.map((link) => (
          <FooterLink key={link.href} {...link} />
        ))}
      </Stack>
    </Text>
  </div>
);

export default Footer;
