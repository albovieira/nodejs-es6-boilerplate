#!/bin/bash

retry=0
result=$(curl -s http://localhost)

until [ "$result" == "OK" ] || [ "$retry" -ge 3 ]
do    
    retry=$[$retry+1]
    sleep 3
    echo "Retry $retry"
    result=$(curl -s http://localhost)    
done

if [ "$result" == "OK" ]
then
    echo "SUCESSO"
    exit 0
else
    echo "ERRO"
    exit 1
fi
