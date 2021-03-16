cmd_Release/obj.target/agorasdk/addon/addon.o := g++ '-DNODE_GYP_MODULE_NAME=agorasdk' '-DUSING_UV_SHARED=1' '-DUSING_V8_SHARED=1' '-DV8_DEPRECATION_WARNINGS=1' '-DV8_DEPRECATION_WARNINGS' '-DV8_IMMINENT_DEPRECATION_WARNINGS' '-D_LARGEFILE_SOURCE' '-D_FILE_OFFSET_BITS=64' '-D__STDC_FORMAT_MACROS' '-DOPENSSL_NO_PINSHARED' '-DOPENSSL_THREADS' '-DBUILDING_NODE_EXTENSION' -I/home/jeremy/.cache/node-gyp/13.10.1/include/node -I/home/jeremy/.cache/node-gyp/13.10.1/src -I/home/jeremy/.cache/node-gyp/13.10.1/deps/openssl/config -I/home/jeremy/.cache/node-gyp/13.10.1/deps/openssl/openssl/include -I/home/jeremy/.cache/node-gyp/13.10.1/deps/uv/include -I/home/jeremy/.cache/node-gyp/13.10.1/deps/zlib -I/home/jeremy/.cache/node-gyp/13.10.1/deps/v8/include -I../node_modules/nan -I../sdk/include  -fPIC -pthread -Wall -Wextra -Wno-unused-parameter -m64 -std=c++11 -O3 -fno-omit-frame-pointer -fno-rtti -fno-exceptions -std=gnu++1y -MMD -MF ./Release/.deps/Release/obj.target/agorasdk/addon/addon.o.d.raw   -c -o Release/obj.target/agorasdk/addon/addon.o ../addon/addon.cc
Release/obj.target/agorasdk/addon/addon.o: ../addon/addon.cc \
 ../node_modules/nan/nan.h \
 /home/jeremy/.cache/node-gyp/13.10.1/include/node/node_version.h \
 /home/jeremy/.cache/node-gyp/13.10.1/include/node/uv.h \
 /home/jeremy/.cache/node-gyp/13.10.1/include/node/uv/errno.h \
 /home/jeremy/.cache/node-gyp/13.10.1/include/node/uv/version.h \
 /home/jeremy/.cache/node-gyp/13.10.1/include/node/uv/unix.h \
 /home/jeremy/.cache/node-gyp/13.10.1/include/node/uv/threadpool.h \
 /home/jeremy/.cache/node-gyp/13.10.1/include/node/uv/linux.h \
 /home/jeremy/.cache/node-gyp/13.10.1/include/node/node.h \
 /home/jeremy/.cache/node-gyp/13.10.1/include/node/v8.h \
 /home/jeremy/.cache/node-gyp/13.10.1/include/node/v8-internal.h \
 /home/jeremy/.cache/node-gyp/13.10.1/include/node/v8-version.h \
 /home/jeremy/.cache/node-gyp/13.10.1/include/node/v8config.h \
 /home/jeremy/.cache/node-gyp/13.10.1/include/node/v8-platform.h \
 /home/jeremy/.cache/node-gyp/13.10.1/include/node/node_version.h \
 /home/jeremy/.cache/node-gyp/13.10.1/include/node/node_buffer.h \
 /home/jeremy/.cache/node-gyp/13.10.1/include/node/node.h \
 /home/jeremy/.cache/node-gyp/13.10.1/include/node/node_object_wrap.h \
 ../node_modules/nan/nan_callbacks.h \
 ../node_modules/nan/nan_callbacks_12_inl.h \
 ../node_modules/nan/nan_maybe_43_inl.h \
 ../node_modules/nan/nan_converters.h \
 ../node_modules/nan/nan_converters_43_inl.h \
 ../node_modules/nan/nan_new.h \
 ../node_modules/nan/nan_implementation_12_inl.h \
 ../node_modules/nan/nan_persistent_12_inl.h \
 ../node_modules/nan/nan_weak.h ../node_modules/nan/nan_object_wrap.h \
 ../node_modules/nan/nan_private.h \
 ../node_modules/nan/nan_typedarray_contents.h \
 ../node_modules/nan/nan_json.h ../addon/rtm_controller.h \
 ../sdk/include/IAgoraRtmService.h
../addon/addon.cc:
../node_modules/nan/nan.h:
/home/jeremy/.cache/node-gyp/13.10.1/include/node/node_version.h:
/home/jeremy/.cache/node-gyp/13.10.1/include/node/uv.h:
/home/jeremy/.cache/node-gyp/13.10.1/include/node/uv/errno.h:
/home/jeremy/.cache/node-gyp/13.10.1/include/node/uv/version.h:
/home/jeremy/.cache/node-gyp/13.10.1/include/node/uv/unix.h:
/home/jeremy/.cache/node-gyp/13.10.1/include/node/uv/threadpool.h:
/home/jeremy/.cache/node-gyp/13.10.1/include/node/uv/linux.h:
/home/jeremy/.cache/node-gyp/13.10.1/include/node/node.h:
/home/jeremy/.cache/node-gyp/13.10.1/include/node/v8.h:
/home/jeremy/.cache/node-gyp/13.10.1/include/node/v8-internal.h:
/home/jeremy/.cache/node-gyp/13.10.1/include/node/v8-version.h:
/home/jeremy/.cache/node-gyp/13.10.1/include/node/v8config.h:
/home/jeremy/.cache/node-gyp/13.10.1/include/node/v8-platform.h:
/home/jeremy/.cache/node-gyp/13.10.1/include/node/node_version.h:
/home/jeremy/.cache/node-gyp/13.10.1/include/node/node_buffer.h:
/home/jeremy/.cache/node-gyp/13.10.1/include/node/node.h:
/home/jeremy/.cache/node-gyp/13.10.1/include/node/node_object_wrap.h:
../node_modules/nan/nan_callbacks.h:
../node_modules/nan/nan_callbacks_12_inl.h:
../node_modules/nan/nan_maybe_43_inl.h:
../node_modules/nan/nan_converters.h:
../node_modules/nan/nan_converters_43_inl.h:
../node_modules/nan/nan_new.h:
../node_modules/nan/nan_implementation_12_inl.h:
../node_modules/nan/nan_persistent_12_inl.h:
../node_modules/nan/nan_weak.h:
../node_modules/nan/nan_object_wrap.h:
../node_modules/nan/nan_private.h:
../node_modules/nan/nan_typedarray_contents.h:
../node_modules/nan/nan_json.h:
../addon/rtm_controller.h:
../sdk/include/IAgoraRtmService.h:
