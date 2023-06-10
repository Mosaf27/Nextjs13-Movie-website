/** @type {import('next').NextConfig} */
const nextConfig = {

    serverComponentsExternalPackages:["mongoose"],     //add mongoose as external server component package
    
    images:{
        domains:['occ-0-3933-116.1.nflxso.net']         //images url for api
    }
}

module.exports = nextConfig
