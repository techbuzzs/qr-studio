import fs from 'node:fs';
fs.mkdirSync('dist',{recursive:true});fs.cpSync('src','dist',{recursive:true});
const {build}=await import('esbuild');await build({entryPoints:['src/vendor-entry.js'],outfile:'dist/vendor.js',bundle:true,format:'esm',minify:true});
