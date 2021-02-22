/// <reference types="jest" />

declare namespace jest {
  interface It {
    atWidth: (width: number, name: string, fn?: ProvidesCallback, timeout?: number) => void
  }
}
