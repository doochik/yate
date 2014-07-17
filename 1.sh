#!/bin/bash

./yate -o _a.yate a.yate
./yate -o _b.yate -i a.yate.obj b.yate
./yate -o _c.yate -i a.yate.obj c.yate
./yate -o _d.yate -i b.yate.obj -i c.yate.obj d.yate
