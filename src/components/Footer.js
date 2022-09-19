import React from "react";

function Footer() {
    return (
        <footer className="footer">
            <div className="content has-text-centered">
                <p>
                    <strong>View My Work!</strong> - a React site by{" "}
                    <a href="https://github.com/oameeno" target="_blank" rel="noreferrer">
                        Amin Albatayneh
                    </a>
                    .
                    <hr />
                    <a
                        href="https://www.linkedin.com/in/aalbat/"
                        target="_blank" rel="noreferrer"
                    >
                        LinkedIn
                    </a>{" "}
                    |{" "}{" "}
                    <a href="https://www.facebook.com/aalbatayneh" target="_blank" rel="noreferrer">
                        Facebook
                    </a>
                </p>
            </div>
        </footer>
    );
}

export default Footer;