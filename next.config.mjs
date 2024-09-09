
// // next.config.js
// export default {
//   images: {
//     minimumCacheTTL: 60,
//   },
//   webpack: (config, { isServer }) => {
//     // Add wasm loader for handling .wasm files
//     config.module.rules.push({
//       test: /\.wasm$/,
//       loader: 'file-loader',
//       options: {
//         publicPath: '/_next/',  // Adjust the public path as per your project structure
//         outputPath: 'static/wasm/',  // Adjust the output path as per your project structure
//         name: '[name].[hash].[ext]',  // Optionally, configure the file name pattern
//       },
//     });

//     return config;
//   },

//   async headers() {
//     return [
//       {
//         source: '/static/wasm/libavif.wasm',  // Adjust the path as per your file location
//         headers: [
//           {
//             key: 'Content-Type',
//             value: 'application/wasm',
//           },
//         ],
//       },
//       // Add more headers if needed for other .wasm files or paths
//     ];
//   },
// };


/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    minimumCacheTTL: 60,
  },
};

export default nextConfig;