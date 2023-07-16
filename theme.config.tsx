import React from 'react'
import {DocsThemeConfig, useConfig} from 'nextra-theme-docs'
import {useRouter} from "next/router";

const config: DocsThemeConfig = {
    logo:
        <span style={{display: "flex", alignItems: "center", gap: "10px"}}>
            <svg width="32" height="32" viewBox="0 0 65 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="27.5171" width="65" height="7.96552" fill="#7E6000"/>
                <rect x="11.6853" y="35.4829" width="4.38202" height="6.51724" fill="#7E6000"/>
                <rect x="48.9326" y="35.4829" width="4.38202" height="6.51724" fill="#7E6000"/>
                <rect x="9.49438" y="13.7588" width="46.0112" height="7.24138" fill="#7E6000"/>
                <rect x="9.49438" width="46.0112" height="7.24138" fill="#7E6000"/>
            </svg>
            Bench AI Docs
        </span>,
    project: {
        link: 'https://github.com/Bench-ai',
    },
    docsRepositoryBase: 'https://github.com/Bench-ai/Docs',
    useNextSeoProps() {
        const {asPath} = useRouter()
        if (asPath !== '/') {
            return {
                titleTemplate: '%s – Bench AI Docs'
            }
        }
    },
    head: function useHead() {
        const {title} = useConfig()
        const {route} = useRouter()

        return (
            <>
                <meta name="msapplication-TileColor" content="#fff"/>
                <meta name="theme-color" content="#fff"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta httpEquiv="Content-Language" content="en"/>
                <meta
                    name="description"
                    content="Bench AI Docs. Train and Deploy your machine learning models on the cloud fast and simple."
                />
                <meta
                    name="og:description"
                    content="Bench AI Docs. Train and Deploy your machine learning models on the cloud fast and simple."
                />
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:image" content="/preview.png" />
                <meta name="twitter:site:domain" content="https://bench-ai.com"/>
                <meta name="twitter:url" content="https://bench-ai.com"/>
                <meta
                    name="og:title"
                    content={title ? title + ' – Bench AI Docs' : 'Bench AI Docs'}
                />
                <meta name="og:image" content="/preview.png" />
                <meta name="apple-mobile-web-app-title" content="Bench AI"/>
                <link rel="icon" href="/favicon.svg" type="image/svg+xml"/>
                <link rel="icon" href="/favicon.png" type="image/png"/>
                <link
                    rel="icon"
                    href="/favicon.svg"
                    type="image/svg+xml"
                    media="(prefers-color-scheme: dark)"
                />
                <link
                    rel="icon"
                    href="/favicon.png"
                    type="image/png"
                    media="(prefers-color-scheme: dark)"
                />
            </>
        )
    },
    banner: {
        key: 'beta-release',
        text: (
            <a href="https://forms.gle/3HDGxeQxJt9CHK9Q9" target="_blank" rel="noreferrer">
                🎉 Bench AI Beta is Released. Join the Waitlist →
            </a>
        )
    },
    sidebar: {
        titleComponent({title, type}) {
            if (type === 'separator') {
                return <span className="cursor-default">{title}</span>
            }
            return <>{title}</>
        },
        defaultMenuCollapseLevel: 1,
        toggleButton: true
    },
    footer: {
        text: (
            <div className="flex w-full flex-col items-center sm:items-start">
                <div>
                    <a
                        className="flex items-center gap-1 text-current"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Bench AI homepage"
                        href="https://bench-ai.com"
                    >
                        <svg width="65" height="65" viewBox="0 0 65 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="27.5171" width="65" height="7.96552" fill="#7E6000"/>
                            <rect x="11.6853" y="35.4829" width="4.38202" height="6.51724" fill="#7E6000"/>
                            <rect x="48.9326" y="35.4829" width="4.38202" height="6.51724" fill="#7E6000"/>
                            <rect x="9.49438" y="13.7588" width="46.0112" height="7.24138" fill="#7E6000"/>
                            <rect x="9.49438" width="46.0112" height="7.24138" fill="#7E6000"/>
                        </svg>
                    </a>
                </div>
                <p className="mt-6 text-xs">
                    © {new Date().getFullYear()} Bench AI, Inc.
                </p>
            </div>
        )
    }
}

export default config
