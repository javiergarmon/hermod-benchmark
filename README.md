hermod-benchmark
================

hermod (https://github.com/javiergarmon/hermod) it's a fast module that communicates processes blazing fast.

In this benchmark we currently compare the performance with dnode (https://github.com/substack/dnode) executing a simple function 10K times individually.

The benchmark result is:
```
 Starting benchmark...

 axon   : 10000 ops takes 1918ms. 5213.764ops/s.
 dnode  : 10000 ops takes 5447ms. 1835.873ops/s.
 hermod : 10000 ops takes 1509ms. 6626.905ops/s.

 hermod is x1.271 times faster than axon
 hermod is x3.610 times faster than dnode
```
