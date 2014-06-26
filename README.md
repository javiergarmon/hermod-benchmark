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

   axon   : 10000 ops takes 1702 ms. 5875.441 ops/s
   dnode  : 10000 ops takes 5183 ms. 1929.385 ops/s
   hermod : 10000 ops takes 1330 ms. 7518.797 ops/s

   hermod is x1.280 times faster than axon
   hermod is x3.897 times faster than dnode

 Parallel benchmark

   axon   : 10000 ops takes 1288 ms. 7763.975 ops/s
   dnode  : 10000 ops takes 10773 ms. 928.247 ops/s
   hermod : 10000 ops takes 846 ms. 11820.331 ops/s

   hermod is x1.522 times faster than axon
   hermod is x12.734 times faster than dnode
```
