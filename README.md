hermod-benchmark
================

hermod (https://github.com/javiergarmon/hermod) it's a fast module that communicates processes blazing fast.

In this benchmark we currently compare the performance executing a simple function 10K times with other modules:

* axon (https://github.com/visionmedia/axon).
* dnode (https://github.com/substack/dnode).

The benchmark result is:
```
 Starting benchmark...

 Series benchmark

   axon   : 10000 ops takes 2082 ms. 4803.074 ops/s
   dnode  : 10000 ops takes 6149 ms. 1626.281 ops/s
   hermod : 10000 ops takes 1522 ms. 6570.302 ops/s

   hermod is x1.368 times faster than axon
   hermod is x4.040 times faster than dnode

 Parallel benchmark

   axon   : 10000 ops takes 1227 ms. 8149.959 ops/s
   dnode  : 10000 ops takes 10615 ms. 942.063 ops/s
   hermod : 10000 ops takes 878 ms. 11389.522 ops/s

   hermod is x1.397 times faster than axon
   hermod is x12.090 times faster than dnode
```
