import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
    reactStrictMode: true,
    async headers() {
        return [
            {
                source: "/:path",
                headers: [
                    {key: "Access-Control-Allow-Credentials", value: "false"},
                    {key: "Access-Control-Allow-Origin", value: "*"},
                    {key: "Access-Control-Allow-Methods", value: "*"},
                    {
                        key: "Access-Control-Allow-Headers",
                        value: ""
                    },
                ]
            }
        ]
    }
};

export default withMDX(config);
