import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default [{
    input: 'index.js',
    output: {
      file: 'dist/dagre.esm.js',
      format: 'es',
    },
    plugins: [
      nodeResolve(),
      commonjs({
        include: /node_modules/,
      }),
    ],
  },
  {
    input: 'index.js',
    output: {
        file: 'dist/dagre.cjs.js',
        format: 'cjs',
        exports: 'auto'
    },
    plugins: [
        nodeResolve(),
        commonjs({
            include: /node_modules/,
        }),
    ],
  }
];
