import {
  faLink,
  faLocationDot,
  faMapLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Container, Data, Link } from "../../../utils/styles/components/userLinks";

interface LinksAreaPropos {
  links: {
    location: string;
    blog: string;
    twitter: string;
    company: string;
  };
}

export default function UserLinks({ links }: LinksAreaPropos) {
  return (
    <Container>
      <Link className={`${!links.location && "unavailable"}`}>
        <FontAwesomeIcon icon={faLocationDot} size="lg" color="#4b6a9b" />
        <Data>{links.location || "Not Available"}</Data>
      </Link>

      <Link className={`${!links.blog && "unavailable"}`}>
        {links.blog ? (
          <a href={links.blog}>
            <FontAwesomeIcon icon={faLink} size="lg" color="#4b6a9b" />
            <Data>{links.blog}</Data>
          </a>
        ) : (
          <>
            <FontAwesomeIcon icon={faLink} size="lg" color="#4b6a9b" />
            <Data>Not Available</Data>
          </>
        )}
      </Link>
      <Link className={`${!links.twitter && "unavailable"}`}>
        {links.twitter ? (
          <a href={`https://twitter.com/${links.twitter}`}>
            <FontAwesomeIcon icon={faTwitter} size="lg" color="#4b6a9b"/>
            <Data>{links.twitter}</Data>
          </a>
        ) : (
          <>
            <FontAwesomeIcon icon={faTwitter} size="lg" color="#4b6a9b"/>
            <Data>Not available</Data>
          </>
        )}
      </Link>
      <Link className={`${!links.company && "unavailable"}`}>
        <FontAwesomeIcon icon={faMapLocationDot} size="lg" color="#4b6a9b" />
        <Data>{links.company || "Not Available"}</Data>
      </Link>
    </Container>
  );
}
