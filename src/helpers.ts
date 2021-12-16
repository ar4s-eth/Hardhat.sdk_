import * as ts from "typescript";

// import * as ts from "@dethcrypto/eth-sdk-client/types"

function compile(fileNames: string[], options: ts.CompilerOptions): void {
  let program = ts.createProgram(fileNames, options);
  let emitResult = program.emit();

  console.log(program)
}

compile(['node_modules/@dethcrypto/eth-sdk-client/index.d.ts'], {
  noEmitOnError: true,
  noImplicitAny: true,
  target: ts.ScriptTarget.ES5,
  module: ts.ModuleKind.CommonJS
});