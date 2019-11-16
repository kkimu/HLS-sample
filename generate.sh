#!/usr/bin/env bash

MEDIA_FILE_PATH=server/media

rm -rf ${MEDIA_FILE_PATH}
mkdir -p ${MEDIA_FILE_PATH}
mediafilesegmenter -t 5 -b http://localhost:8080 -f ${MEDIA_FILE_PATH} -i index.m3u8 files/sample.mp4
