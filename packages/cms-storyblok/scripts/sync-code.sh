# environment variables
cp ../../.env ./.env
set -a; source .env; set +a

# pull
STORYBLOK_LOGIN=$STORYBLOK_SOURCE_EMAIL STORYBLOK_TOKEN=$STORYBLOK_SOURCE_TOKEN npx storyblok pull-components --space $STORYBLOK_SOURCE_SPACE

# move files to config
cp ./components.$STORYBLOK_SOURCE_SPACE.json ./config/
rm ./components.$STORYBLOK_SOURCE_SPACE.json
cp ./presets.$STORYBLOK_SOURCE_SPACE.json ./config/
rm ./presets.$STORYBLOK_SOURCE_SPACE.json

# push
storyblok-generate-ts source=./config/components.$STORYBLOK_SPACE_ID.json target=./src/types/generated/storyblok.types.ts
