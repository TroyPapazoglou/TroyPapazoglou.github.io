import './SocialIcons.css';
import githubIcon from '../images/githubIcon.svg';
import itchIcon from '../images/itchIcon.svg';
import linkedInIcon from '../images/linkedinIcon.svg';

export default function SocialIcons()
{
    return(
        <div className="contact-col">
            <div className="social-icon-wrapper">
                <a
                    id="githubIcon"
                    className="offscreen"
                    href="https://github.com/TroyPapazoglou"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={githubIcon} alt="GitHub" />
                </a>
                <a
                    id="itchIcon"
                    className="offscreen"
                    href="https://itsjusttroy.itch.io"
                    target="_blank"
                    rel="noopener n oreferrer"
                >
                    <img src={itchIcon} alt="Itch.io" />
                </a>
                <a
                    id="linkedInIcon"
                    className="offscreen"
                    href="https://www.linkedin.com/in/troy-papazoglou-abba00284/"
                    target="_blank"
                    rel="noopener noreferrer"
                > 
                    <img src={linkedInIcon} alt="LinkedIn" />
                </a>
            </div>
        </div>
    )
}