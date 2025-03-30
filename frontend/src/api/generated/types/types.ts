;`Kubb: Generated types`

export type PatchedTestModel = {
  /**
   * @type integer | undefined
   */
  readonly id?: number | undefined
  /**
   * @maxLength 1000
   * @type string | undefined
   */
  name?: string | undefined
}

export type PatchedTestModel2 = {
  /**
   * @type integer | undefined
   */
  readonly id?: number | undefined
  /**
   * @maxLength 1000
   * @type string | undefined
   */
  name?: string | undefined
}

export type TestModel = {
  /**
   * @type integer
   */
  readonly id: number
  /**
   * @maxLength 1000
   * @type string
   */
  name: string
}

export type TestModel2 = {
  /**
   * @type integer
   */
  readonly id: number
  /**
   * @maxLength 1000
   * @type string
   */
  name: string
}

export type TokenObtainPair = {
  /**
   * @type string
   */
  username: string
  /**
   * @type string
   */
  password: string
  /**
   * @type string
   */
  readonly access: string
  /**
   * @type string
   */
  readonly refresh: string
}

export type TokenRefresh = {
  /**
   * @type string
   */
  readonly access: string
  /**
   * @type string
   */
  refresh: string
}

export const schemaRetrieveQueryParamsFormatEnum = {
  json: 'json',
  yaml: 'yaml',
} as const

export type SchemaRetrieveQueryParamsFormatEnum = (typeof schemaRetrieveQueryParamsFormatEnum)[keyof typeof schemaRetrieveQueryParamsFormatEnum]

export const schemaRetrieveQueryParamsLangEnum = {
  af: 'af',
  ar: 'ar',
  'ar-dz': 'ar-dz',
  ast: 'ast',
  az: 'az',
  be: 'be',
  bg: 'bg',
  bn: 'bn',
  br: 'br',
  bs: 'bs',
  ca: 'ca',
  ckb: 'ckb',
  cs: 'cs',
  cy: 'cy',
  da: 'da',
  de: 'de',
  dsb: 'dsb',
  el: 'el',
  en: 'en',
  'en-au': 'en-au',
  'en-gb': 'en-gb',
  eo: 'eo',
  es: 'es',
  'es-ar': 'es-ar',
  'es-co': 'es-co',
  'es-mx': 'es-mx',
  'es-ni': 'es-ni',
  'es-ve': 'es-ve',
  et: 'et',
  eu: 'eu',
  fa: 'fa',
  fi: 'fi',
  fr: 'fr',
  fy: 'fy',
  ga: 'ga',
  gd: 'gd',
  gl: 'gl',
  he: 'he',
  hi: 'hi',
  hr: 'hr',
  hsb: 'hsb',
  hu: 'hu',
  hy: 'hy',
  ia: 'ia',
  id: 'id',
  ig: 'ig',
  io: 'io',
  is: 'is',
  it: 'it',
  ja: 'ja',
  ka: 'ka',
  kab: 'kab',
  kk: 'kk',
  km: 'km',
  kn: 'kn',
  ko: 'ko',
  ky: 'ky',
  lb: 'lb',
  lt: 'lt',
  lv: 'lv',
  mk: 'mk',
  ml: 'ml',
  mn: 'mn',
  mr: 'mr',
  ms: 'ms',
  my: 'my',
  nb: 'nb',
  ne: 'ne',
  nl: 'nl',
  nn: 'nn',
  os: 'os',
  pa: 'pa',
  pl: 'pl',
  pt: 'pt',
  'pt-br': 'pt-br',
  ro: 'ro',
  ru: 'ru',
  sk: 'sk',
  sl: 'sl',
  sq: 'sq',
  sr: 'sr',
  'sr-latn': 'sr-latn',
  sv: 'sv',
  sw: 'sw',
  ta: 'ta',
  te: 'te',
  tg: 'tg',
  th: 'th',
  tk: 'tk',
  tr: 'tr',
  tt: 'tt',
  udm: 'udm',
  ug: 'ug',
  uk: 'uk',
  ur: 'ur',
  uz: 'uz',
  vi: 'vi',
  'zh-hans': 'zh-hans',
  'zh-hant': 'zh-hant',
} as const

export type SchemaRetrieveQueryParamsLangEnum = (typeof schemaRetrieveQueryParamsLangEnum)[keyof typeof schemaRetrieveQueryParamsLangEnum]

export type SchemaRetrieveQueryParams = {
  /**
   * @type string | undefined
   */
  format?: SchemaRetrieveQueryParamsFormatEnum | undefined
  /**
   * @type string | undefined
   */
  lang?: SchemaRetrieveQueryParamsLangEnum | undefined
}

export type SchemaRetrieve200 = {
  [key: string]: unknown
}

export type SchemaRetrieveQueryResponse = SchemaRetrieve200

export type SchemaRetrieveQuery = {
  Response: SchemaRetrieve200
  QueryParams: SchemaRetrieveQueryParams
  Errors: any
}

export type TestModelList200 = TestModel[]

export type TestModelListQueryResponse = TestModelList200

export type TestModelListQuery = {
  Response: TestModelList200
  Errors: any
}

export type TestModelCreate201 = TestModel

export type TestModelCreateMutationRequest = Omit<NonNullable<TestModel>, 'id'>

export type TestModelCreateMutationResponse = TestModelCreate201

export type TestModelCreateMutation = {
  Response: TestModelCreate201
  Request: TestModelCreateMutationRequest
  Errors: any
}

export type TestModelRetrievePathParams = {
  /**
   * @description A unique integer value identifying this test model.
   * @type integer
   */
  id: number
}

export type TestModelRetrieve200 = TestModel

export type TestModelRetrieveQueryResponse = TestModelRetrieve200

export type TestModelRetrieveQuery = {
  Response: TestModelRetrieve200
  PathParams: TestModelRetrievePathParams
  Errors: any
}

export type TestModelUpdatePathParams = {
  /**
   * @description A unique integer value identifying this test model.
   * @type integer
   */
  id: number
}

export type TestModelUpdate200 = TestModel

export type TestModelUpdateMutationRequest = Omit<NonNullable<TestModel>, 'id'>

export type TestModelUpdateMutationResponse = TestModelUpdate200

export type TestModelUpdateMutation = {
  Response: TestModelUpdate200
  Request: TestModelUpdateMutationRequest
  PathParams: TestModelUpdatePathParams
  Errors: any
}

export type TestModelPartialUpdatePathParams = {
  /**
   * @description A unique integer value identifying this test model.
   * @type integer
   */
  id: number
}

export type TestModelPartialUpdate200 = TestModel

export type TestModelPartialUpdateMutationRequest = Omit<NonNullable<PatchedTestModel>, 'id'>

export type TestModelPartialUpdateMutationResponse = TestModelPartialUpdate200

export type TestModelPartialUpdateMutation = {
  Response: TestModelPartialUpdate200
  Request: TestModelPartialUpdateMutationRequest
  PathParams: TestModelPartialUpdatePathParams
  Errors: any
}

export type TestModelDestroyPathParams = {
  /**
   * @description A unique integer value identifying this test model.
   * @type integer
   */
  id: number
}

/**
 * @description No response body
 */
export type TestModelDestroy204 = unknown

export type TestModelDestroyMutationResponse = TestModelDestroy204

export type TestModelDestroyMutation = {
  Response: TestModelDestroy204
  PathParams: TestModelDestroyPathParams
  Errors: any
}

export type TestModel2List200 = TestModel2[]

export type TestModel2ListQueryResponse = TestModel2List200

export type TestModel2ListQuery = {
  Response: TestModel2List200
  Errors: any
}

export type TestModel2Create201 = TestModel2

export type TestModel2CreateMutationRequest = Omit<NonNullable<TestModel2>, 'id'>

export type TestModel2CreateMutationResponse = TestModel2Create201

export type TestModel2CreateMutation = {
  Response: TestModel2Create201
  Request: TestModel2CreateMutationRequest
  Errors: any
}

export type TestModel2RetrievePathParams = {
  /**
   * @description A unique integer value identifying this test model2.
   * @type integer
   */
  id: number
}

export type TestModel2Retrieve200 = TestModel2

export type TestModel2RetrieveQueryResponse = TestModel2Retrieve200

export type TestModel2RetrieveQuery = {
  Response: TestModel2Retrieve200
  PathParams: TestModel2RetrievePathParams
  Errors: any
}

export type TestModel2UpdatePathParams = {
  /**
   * @description A unique integer value identifying this test model2.
   * @type integer
   */
  id: number
}

export type TestModel2Update200 = TestModel2

export type TestModel2UpdateMutationRequest = Omit<NonNullable<TestModel2>, 'id'>

export type TestModel2UpdateMutationResponse = TestModel2Update200

export type TestModel2UpdateMutation = {
  Response: TestModel2Update200
  Request: TestModel2UpdateMutationRequest
  PathParams: TestModel2UpdatePathParams
  Errors: any
}

export type TestModel2PartialUpdatePathParams = {
  /**
   * @description A unique integer value identifying this test model2.
   * @type integer
   */
  id: number
}

export type TestModel2PartialUpdate200 = TestModel2

export type TestModel2PartialUpdateMutationRequest = Omit<NonNullable<PatchedTestModel2>, 'id'>

export type TestModel2PartialUpdateMutationResponse = TestModel2PartialUpdate200

export type TestModel2PartialUpdateMutation = {
  Response: TestModel2PartialUpdate200
  Request: TestModel2PartialUpdateMutationRequest
  PathParams: TestModel2PartialUpdatePathParams
  Errors: any
}

export type TestModel2DestroyPathParams = {
  /**
   * @description A unique integer value identifying this test model2.
   * @type integer
   */
  id: number
}

/**
 * @description No response body
 */
export type TestModel2Destroy204 = unknown

export type TestModel2DestroyMutationResponse = TestModel2Destroy204

export type TestModel2DestroyMutation = {
  Response: TestModel2Destroy204
  PathParams: TestModel2DestroyPathParams
  Errors: any
}

export type TokenCreate200 = Omit<NonNullable<TokenObtainPair>, 'username' | 'password'>

export type TokenCreateMutationRequest = Omit<NonNullable<TokenObtainPair>, 'access' | 'refresh'>

export type TokenCreateMutationResponse = TokenCreate200

export type TokenCreateMutation = {
  Response: TokenCreate200
  Request: TokenCreateMutationRequest
  Errors: any
}

export type TokenRefreshCreate200 = Omit<NonNullable<TokenRefresh>, 'refresh'>

export type TokenRefreshCreateMutationRequest = Omit<NonNullable<TokenRefresh>, 'access'>

export type TokenRefreshCreateMutationResponse = TokenRefreshCreate200

export type TokenRefreshCreateMutation = {
  Response: TokenRefreshCreate200
  Request: TokenRefreshCreateMutationRequest
  Errors: any
}