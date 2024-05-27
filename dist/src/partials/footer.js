class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const socialMediaHrefs = {
            instagram: 'https://www.instagram.com/_bryanfks/',
            github: 'https://github.com/bryanfks-dev',
            linkedin: 'https://www.linkedin.com/in/bryan-fernando-2394bb21b/'
        }

        this.innerHTML = `
            <style type="text/css">
                .custom-footer {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 1.5rem;
                padding: 2.5rem 0;
                background-color: var(--background-color-primary);
                }

                /* Logo */
                .custom-footer .logo {
                color: var(--color-base);
                font-family: "Titanium-Web";
                font-size: 1.3rem;
                }

                .custom-footer .logo::before {
                content: "bry";
                color: var(--color-primary);
                }

                .custom-footer .logo::after {
                content: "fks.";
                color: var(--color-base);
                }

                /* Contact(s) */
                .custom-footer .contact {
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                justify-content: center;
                gap: 1.2rem;
                }

                .custom-footer .contact svg {
                fill: var(--background-color-primary);
                }

                .custom-footer .contact a {
                background-color: var(--color-secondary);
                padding: .4rem .4rem .1rem .4rem;
                border-radius: 999rem;
                -webkit-border-radius: 999rem;
                -moz-border-radius: 999rem;
                -ms-border-radius: 999rem;
                -o-border-radius: 999rem;
                }

                .custom-footer .contact a:hover {
                filter: brightness(.7);
                }

                /* Copyright text */
                .custom-footer p {
                font-family: "Gilroy";
                color: var(--color-secondary);
                word-break: break-all;
                }
            </style>
            <div class="custom-footer">
                <!-- Logo -->
                <span class="logo">/</span>
                <!-- Contact(s) -->
                <div class="contact">
                    <!-- Instagram -->
                    <a rel="noopener noreferrer" href="${socialMediaHrefs.instagram}" target="blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path
                                d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z">
                            </path>
                            <circle cx="16.806" cy="7.207" r="1.078"></circle>
                            <path
                                d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z">
                            </path>
                        </svg>
                    </a>
                    <!-- Github -->
                    <a rel="noopener noreferrer" href="${socialMediaHrefs.github}" target="blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z">
                            </path>
                        </svg>
                    </a>
                    <!-- Linkedin -->
                    <a rel="noopener noreferrer" href="${socialMediaHrefs.linkedin}"
                        target="blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <circle cx="4.983" cy="5.009" r="2.188"></circle>
                            <path
                                d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z">
                            </path>
                        </svg>
                    </a>
                </div>
                <!-- Copyright text -->
                <p>
                    &copy; 2023 Bryan Fernando
                </p>
            </div>
        `.trim();
    }
}

customElements.define("custom-footer", Footer);

/* Script(s) */
if (matchMedia('(max-width: 800px)').matches) {
    const custom_footer = document.querySelector(".custom-footer");
    const navbar = document.querySelector(".navbar");

    // Add custom footer padding bottom
    custom_footer.style.paddingBottom = `${1.5 * navbar.scrollHeight}px`;
}

// Trigger resize event
dispatchEvent(new Event("resize"));