hermod-benchmark
================

hermod (https://github.com/javiergarmon/hermod) it's a fast module that communicates processes blazing fast.

In this benchmark we currently compare the performance with dnode (https://github.com/substack/dnode).

The benchmark result is:
```
 Starting benchmark...

 dnode  : 10000 ops takes 5979ms. 1672.520ops/s.
 dnode  : 10000 ops takes 1684ms. 5938.242ops/s.

 hermod is x3.550 times faster than dnode
```
