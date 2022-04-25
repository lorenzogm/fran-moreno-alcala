import Joi from 'joi';

import designTokens from './designTokens.json';

export async function getDesignTokens() {
  const schema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),

    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

    repeat_password: Joi.ref('password'),

    access_token: [Joi.string(), Joi.number()],

    birth_year: Joi.number().integer().min(1900).max(2013),

    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
  });

  schema.validate(designTokens);

  try {
    return schema.validateAsync({ usernamasdfe: 'abc', birth_year: 1994 });
  } catch (err) {
    throw new Error('joder');
  }
}
// export const designTokens = designTokensAsJSON;

// type MapTokensProps = {
//   [key: string]: DefaultValueInFigma;
// };

// type MapTokensReturn = {
//   [key: string]: DefaultValue;
// };
// function mapDefaultValues(designToken: MapTokensProps): MapTokensReturn {
//   return Object.entries(designToken).reduce((acc, [key, value]) => {
//     return { ...acc, [key]: value.value };
//   }, {});
// }

// const b: DesignTokens<DefaultValue, TypographyValue> = {
//   global: {
//     breakpoints: mapDefaultValues(a.global.breakpoints),
//   },
// };
