# abort on errors
set -e

# Install dependencies
echo npm:install
npm install

# Migrate Sqlite database
echo db:migrate
npx sequelize-cli db:migrate

cd -