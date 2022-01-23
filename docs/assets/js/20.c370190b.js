(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{417:function(t,s,a){"use strict";a.r(s);var n=a(56),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"stitching"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stitching"}},[t._v("#")]),t._v(" Stitching")]),t._v(" "),a("p",[a("strong",[t._v("Stitching")]),t._v(" is a part of "),a("code",[t._v("caliban-tools")]),t._v(" which can be used to use parts of another GraphQL API from an API you're building in situations where using Apollo federation isn't an option. You can also use it to fully subsume and proxy another GraphQL schema.")]),t._v(" "),a("p",[t._v("In general, Federation should be your preferred choice.")]),t._v(" "),a("p",[t._v("You should also be careful when using stitching since it's very easy to pull in large parts of an external schema's types and structure into your API. This can make it error prone since the likelihood that you'll get type clashes between your API and the API you're stitching in quickly increases.")]),t._v(" "),a("h2",{attrs:{id:"dependencies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dependencies"}},[t._v("#")]),t._v(" Dependencies")]),t._v(" "),a("p",[t._v("In order to use stitching, add "),a("code",[t._v("caliban-tools")]),t._v(" to your dependencies:")]),t._v(" "),a("div",{staticClass:"language-scala extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scala"}},[a("code",[t._v("libraryDependencies "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"com.github.ghostdogpr"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"caliban-tools"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.3.2"')]),t._v("\n")])])]),a("h2",{attrs:{id:"stitching-in-action"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stitching-in-action"}},[t._v("#")]),t._v(" Stitching in Action")]),t._v(" "),a("p",[t._v("Let's start out by defining our API. We'll have "),a("code",[t._v("AppUser")]),t._v(" profiles, that has a linked "),a("code",[t._v("featuredRepository")]),t._v(". For the "),a("code",[t._v("featuredRepository")]),t._v(", we want to leverage "),a("a",{attrs:{href:"https://docs.github.com/en/graphql",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github's GraphQL API"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("div",{staticClass:"language-scala mdoc:silent extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scala"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("caliban"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),t._v("_\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("caliban"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("schema"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),t._v("_\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("zio"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),t._v("_\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("object")]),t._v(" StitchingExample "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" GenericSchema"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ZEnv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" AppUser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" featuredRepository"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Repository"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" Repository"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("owner"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" GetUserQuery"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" repository"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" Queries"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    GetUser"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" GetUserQuery "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("=>")]),t._v(" URIO"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ZEnv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" AppUser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" graphQL"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" GraphQL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ZEnv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" GraphQL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("graphQL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    RootResolver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      Queries"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        GetUser "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" query "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("=>")]),t._v("\n          random"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nextUUID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("map"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("uuid "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("=>")]),t._v("\n            AppUser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n              id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" uuid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("toString"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" query"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              featuredRepository "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Repository"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("query"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" query"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("repository"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Now let's integrate with the Github API!")]),t._v(" "),a("p",[t._v("In order to do this we're going to do a couple of things:")]),t._v(" "),a("ol",[a("li",[t._v("Load the introspection schema from Github's API")]),t._v(" "),a("li",[t._v("Parse the introspected schema into a "),a("code",[t._v("caliban.introspection.adt.__Schema")])]),t._v(" "),a("li",[t._v("Use the parsed schema to generate an "),a("code",[t._v("implicit Schema[R, A]")]),t._v(" for the entities we're stitching. This effectively replaces our own schema with one from Github.")]),t._v(" "),a("li",[t._v("Teach our implicit schema how to map our local resolver to a query that can be resolved remotely by calling Github's API.")])]),t._v(" "),a("div",{staticClass:"language-scala extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scala"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" GITHUB_API "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://api.github.com/graphql"')]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" api "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    sttpClient           "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("<-")]),t._v(" ZIO"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("environment"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("SttpClient"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1")]),t._v("\n    schemaLoader          "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" SchemaLoader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fromIntrospection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("GITHUB_API"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" None"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    schema               "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("<-")]),t._v(" schemaLoader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("load\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2")]),t._v("\n    remoteSchema         "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("<-")]),t._v(" ZIO"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fromOption"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("RemoteSchema"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parseRemoteSchema"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("schema"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    remoteSchemaResolvers "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" RemoteSchemaResolver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fromSchema"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("remoteSchema"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("yield")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implicit")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" githubProfileSchema"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Schema"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ZEnv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Repository"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n      remoteSchemaResolvers\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("remoteResolver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Repository"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 4")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Here we need to translate our local `Repository` case class into")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// a top-level query which can be issued towards Github's API.")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// We do this by accepting a `caliban.execution.Field`, representing")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// all the selected fields for a repository and map that to the")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// top-level `repository` query in the Github API.")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// This means the final query will end up looking something like this:")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// query {")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   repository(owner: r.args.owner, name: r.args.name) {")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .   <incoming query>")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   }")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// }")]),t._v("\n          RemoteResolver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fromFunction"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("r"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ResolveRequest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Repository"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("=>")]),t._v("\n            r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("field"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("copy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n              name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"repository"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              arguments "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Map"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"owner"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" Value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("StringValue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("owner"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),t._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" Value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("StringValue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>>")]),t._v(" RemoteResolver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fromUrl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("GITHUB_API"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("provide"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sttpClient"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("However, when running this we will experience failing requests due to "),a("code",[t._v("401 Unauthorized")]),t._v(". This is because all queries to Github's API requires authorization to be provided. In order to fix this, we need to add authorization to both the introspection query as well as our remote resolver. We also need a config module that can provide us with a Github token based on the value of "),a("code",[t._v("GITHUB_TOKEN")]),t._v(" in our environment.")]),t._v(" "),a("div",{staticClass:"language-scala extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scala"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" Configuration"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("githubToken"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("object")]),t._v(" Configuration "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" fromEnvironment "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      githubToken "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("<-")]),t._v(" read"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"GITHUB_TOKEN"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("yield")]),t._v(" Configuration"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("githubToken"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("toLayer\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" read"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Task"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Task"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("effect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    sys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("We can now update the introspection query to use our token:")]),t._v(" "),a("div",{staticClass:"language-scala extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scala"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" api "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    config     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("<-")]),t._v(" ZIO"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("environment"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Has"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Configuration"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    schemaLoader "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" SchemaLoader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fromIntrospection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                     GITHUB_API"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                     Some"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                       List"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                         Options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Header"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                           "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Authorization"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                           s"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Bearer ${config.get.githubToken}"')]),t._v("\n                         "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                       "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("yield")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("\n")])])]),a("p",[t._v("as well as update our resolver to authorize our request.")]),t._v(" "),a("p",[t._v("In order to do this, we can use "),a("code",[t._v("RemoteResolver[R, E, A, B]")]),t._v(" which lets us compose resolution steps via "),a("code",[t._v(">>>")]),t._v(".")]),t._v(" "),a("p",[t._v("In order to make this code easier, we can extract the mechanics around sending the actual request:")]),t._v(" "),a("div",{staticClass:"language-scala extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scala"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" apiRequest "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n    RemoteResolver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("toQuery "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>>")]),t._v(" RemoteResolver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("GITHUB_API"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>>")]),t._v(" RemoteResolver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fromFunctionM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("r"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" HttpRequest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("=>")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        config "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("<-")]),t._v(" ZIO"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Configuration"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("yield")]),t._v(" r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("header"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Authorization"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Bearer ${config.githubToken}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>>")]),t._v(" RemoteResolver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("execute "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>>")]),t._v(" RemoteResolver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("unwrap\n")])])]),a("p",[t._v("And now we can use our new "),a("code",[t._v("apiRequest")]),t._v(" when resolving our "),a("code",[t._v("Schema[ZEnv, Repository]")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-scala extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scala"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implicit")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" githubProfileSchema"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Schema"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ZEnv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Repository"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n  remoteSchemaResolvers\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("remoteResolver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Repository"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      RemoteResolver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fromFunction"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("r"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ResolveRequest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Repository"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("=>")]),t._v("\n      r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("field"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("copy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n          name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"repository"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          arguments "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Map"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"owner"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" Value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("StringValue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("owner"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),t._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" Value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("StringValue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>>")]),t._v(" apiRequest\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("provide"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sttpClient "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v(" config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("All that's left to do is to hook up to an HTTP server and configure a Github API token. And now you have an API that can handle queries such as these:")]),t._v(" "),a("div",{staticClass:"language-graphql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-graphql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("query")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property-query"}},[t._v("GetUser")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ghostdogpr"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("repository")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"caliban"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("id")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("name")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token object"}},[t._v("featuredRepository")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property-query"}},[t._v("pullRequests")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("states")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("OPEN")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("first")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token object"}},[t._v("edges")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token object"}},[t._v("node")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("title")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token object"}},[t._v("author")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("login")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("See the "),a("a",{attrs:{href:"https://github.com/ghostdogpr/caliban/tree/master/examples/src/main/scala/example/stitching",target:"_blank",rel:"noopener noreferrer"}},[t._v("examples directory"),a("OutboundLink")],1),t._v(" for a full example.")]),t._v(" "),a("h2",{attrs:{id:"things-not-yet-supported"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#things-not-yet-supported"}},[t._v("#")]),t._v(" Things not yet supported")]),t._v(" "),a("ul",[a("li",[t._v("Type renaming.")]),t._v(" "),a("li",[t._v("Type conflict resolution strategies.")])])])}),[],!1,null,null,null);s.default=e.exports}}]);