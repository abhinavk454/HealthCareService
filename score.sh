#!/bin/sh
count=1
cd Dotnet/HealthCareService
dotnet run > server.txt 2>&1 &
pid=$!
while [ "$(cat server.txt | grep 'Application started. Press Ctrl+C to shut down.')" == "" ] && [ $count -lt 40 ]
do
sleep 1
count=$((count + 1))
done
cd ..
cd HealthCareService.Tests 
rm -rf reports 
dotnet build
dotnet test --logger xunit --results-directory ./reports/
cd ../../
npm install;
npm test
