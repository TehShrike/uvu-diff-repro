To reproduce (node 14.6)

```sh
npm it
```

Expected: the tests should fail and show the diff of the objects

Observed: the tests fail with this stack trace

```
diff.diffLines is not a function  (undefined)

at lines (file:///Users/josh/git/2020-08-05-uvu-diff-repro/node_modules/uvu/diff/index.mjs:67:17)
at compare (file:///Users/josh/git/2020-08-05-uvu-diff-repro/node_modules/uvu/diff/index.mjs:200:41)
at assert (file:///Users/josh/git/2020-08-05-uvu-diff-repro/node_modules/uvu/assert/index.mjs:30:28)
at Module.equal (file:///Users/josh/git/2020-08-05-uvu-diff-repro/node_modules/uvu/assert/index.mjs:43:2)
at Object.handler (file:///Users/josh/git/2020-08-05-uvu-diff-repro/repro.tests.mjs:6:9)
at Number.runner (file:///Users/josh/git/2020-08-05-uvu-diff-repro/node_modules/uvu/dist/index.mjs:92:16)
at exec (file:///Users/josh/git/2020-08-05-uvu-diff-repro/node_modules/uvu/dist/index.mjs:147:39)
at Module.default (file:///Users/josh/git/2020-08-05-uvu-diff-repro/node_modules/uvu/run/index.mjs:13:8)
at async /Users/josh/git/2020-08-05-uvu-diff-repro/node_modules/uvu/bin.js:24:4
```
