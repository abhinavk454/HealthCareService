cd Dotnet/HealthCareService.Tests && rm -rf reports && dotnet build && dotnet test --logger xunit --results-directory ./reports/
cd ../../
npm test