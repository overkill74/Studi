#/bin/bash

PREFIX=${HOME}/local_linux_amd64

mkdir -p build
cd build

cmake -DCMAKE_INSTALL_PREFIX=${PREFIX} ..
