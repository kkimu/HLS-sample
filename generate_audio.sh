#!/usr/bin/env bash

MEDIA_FILE_PATH=server/media

rm -rf ${MEDIA_FILE_PATH}
mkdir -p ${MEDIA_FILE_PATH}
ffmpeg -i files/sample.mp3 -c:a aac -b:a 64k -vn -hls_list_size 0 -hls_base_url http://localhost:8080/ server/media/index.m3u8
