/** @jsxImportSource @emotion/react */


import { Fragment, useContext } from "react"
import { Box as RadixThemesBox, Button as RadixThemesButton, DropdownMenu as RadixThemesDropdownMenu, Flex as RadixThemesFlex, Heading as RadixThemesHeading, IconButton as RadixThemesIconButton, Link as RadixThemesLink, Separator as RadixThemesSeparator, Text as RadixThemesText } from "@radix-ui/themes"
import NextLink from "next/link"
import { BarChart3Icon as LucideBarChart3Icon, ChevronDownIcon as LucideChevronDownIcon, SettingsIcon as LucideSettingsIcon, UsersIcon as LucideUsersIcon } from "lucide-react"
import { ColorModeContext } from "/utils/context"
import { isTrue } from "/utils/state"
import NextHead from "next/head"



export function Link_45925b1e7b16944cfa98bcd9d4959bc7 () {
  const { resolvedColorMode } = useContext(ColorModeContext)



  return (
    <RadixThemesLink asChild={true} css={{"&:hover": {"color": "var(--accent-8)"}}} size={`3`}>
  <NextLink href={`https://reflex.dev`} passHref={true}>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} css={{"textAlign": "center", "padding": "1em"}} direction={`row`} gap={`3`}>
  {`Built with `}
  <Fragment>
  {isTrue(((resolvedColorMode) === (`light`))) ? (
  <Fragment>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "<svg width=\"56\" height=\"12\" viewBox=\"0 0 56 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M0 11.6V0.400024H8.96V4.88002H6.72V2.64002H2.24V4.88002H6.72V7.12002H2.24V11.6H0ZM6.72 11.6V7.12002H8.96V11.6H6.72Z\" fill=\"#110F1F\"/>\n<path d=\"M11.2 11.6V0.400024H17.92V2.64002H13.44V4.88002H17.92V7.12002H13.44V9.36002H17.92V11.6H11.2Z\" fill=\"#110F1F\"/>\n<path d=\"M20.16 11.6V0.400024H26.88V2.64002H22.4V4.88002H26.88V7.12002H22.4V11.6H20.16Z\" fill=\"#110F1F\"/>\n<path d=\"M29.12 11.6V0.400024H31.36V9.36002H35.84V11.6H29.12Z\" fill=\"#110F1F\"/>\n<path d=\"M38.08 11.6V0.400024H44.8V2.64002H40.32V4.88002H44.8V7.12002H40.32V9.36002H44.8V11.6H38.08Z\" fill=\"#110F1F\"/>\n<path d=\"M47.04 4.88002V0.400024H49.28V4.88002H47.04ZM53.76 4.88002V0.400024H56V4.88002H53.76ZM49.28 7.12002V4.88002H53.76V7.12002H49.28ZM47.04 11.6V7.12002H49.28V11.6H47.04ZM53.76 11.6V7.12002H56V11.6H53.76Z\" fill=\"#110F1F\"/>\n</svg>"}}/>
</Fragment>
) : (
  <Fragment>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "<svg width=\"56\" height=\"12\" viewBox=\"0 0 56 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M0 11.5999V0.399902H8.96V4.8799H6.72V2.6399H2.24V4.8799H6.72V7.1199H2.24V11.5999H0ZM6.72 11.5999V7.1199H8.96V11.5999H6.72Z\" fill=\"white\"/>\n<path d=\"M11.2 11.5999V0.399902H17.92V2.6399H13.44V4.8799H17.92V7.1199H13.44V9.3599H17.92V11.5999H11.2Z\" fill=\"white\"/>\n<path d=\"M20.16 11.5999V0.399902H26.88V2.6399H22.4V4.8799H26.88V7.1199H22.4V11.5999H20.16Z\" fill=\"white\"/>\n<path d=\"M29.12 11.5999V0.399902H31.36V9.3599H35.84V11.5999H29.12Z\" fill=\"white\"/>\n<path d=\"M38.08 11.5999V0.399902H44.8V2.6399H40.32V4.8799H44.8V7.1199H40.32V9.3599H44.8V11.5999H38.08Z\" fill=\"white\"/>\n<path d=\"M47.04 4.8799V0.399902H49.28V4.8799H47.04ZM53.76 4.8799V0.399902H56V4.8799H53.76ZM49.28 7.1199V4.8799H53.76V7.1199H49.28ZM47.04 11.5999V7.1199H49.28V11.5999H47.04ZM53.76 11.5999V7.1199H56V11.5999H53.76Z\" fill=\"white\"/>\n</svg>"}}/>
</Fragment>
)}
</Fragment>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
  )
}

export default function Component() {

  return (
    <Fragment>
  <RadixThemesBox css={{"backgroundColor": "var(--accent-2)", "fontFamily": "Share Tech Mono", "--default-font-family": "Share Tech Mono", "paddingBottom": "4em"}}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "250px", "position": "fixed", "height": "100%", "left": "0px", "top": "0px", "alignItems": "left", "zIndex": "10", "backdropFilter": "blur(10px)", "padding": "2em"}} direction={`column`} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`row`} gap={`7`}>
  <img css={{"height": "28px", "borderRadius": "8px"}} src={`/logo.jpg`}/>
  <RadixThemesHeading css={{"fontFamily": "Share Tech Mono", "--default-font-family": "Share Tech Mono"}} size={`7`}>
  {`REFLEX`}
</RadixThemesHeading>
</RadixThemesFlex>
  <RadixThemesSeparator css={{"marginTop": "3", "marginBottom": "3"}} size={`4`}/>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"paddingTop": "1em", "paddingBottom": "1em"}} direction={`column`} gap={`3`}>
  <RadixThemesLink asChild={true} css={{"width": "100%", "borderRadius": "8px", "&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`/`} passHref={true}>
  <RadixThemesFlex align={`baseline`} css={{"py": "2", "px": "4", "fontFamily": "Share Tech Mono", "--default-font-family": "Share Tech Mono"}} direction={`row`} gap={`3`}>
  <RadixThemesIconButton css={{"padding": "6px"}} variant={`soft`}>
  <LucideBarChart3Icon css={{"weight": 16, "height": 16, "color": "var(--current-color)"}}/>
</RadixThemesIconButton>
  {`Dashboard`}
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
  <RadixThemesLink asChild={true} css={{"width": "100%", "borderRadius": "8px", "&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`/tools`} passHref={true}>
  <RadixThemesFlex align={`baseline`} css={{"py": "2", "px": "4", "fontFamily": "Share Tech Mono", "--default-font-family": "Share Tech Mono"}} direction={`row`} gap={`3`}>
  <RadixThemesIconButton css={{"padding": "6px"}} variant={`soft`}>
  <LucideSettingsIcon css={{"weight": 16, "height": 16, "color": "var(--current-color)"}}/>
</RadixThemesIconButton>
  {`Tools`}
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
  <RadixThemesLink asChild={true} css={{"width": "100%", "borderRadius": "8px", "&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`/team`} passHref={true}>
  <RadixThemesFlex align={`baseline`} css={{"py": "2", "px": "4", "fontFamily": "Share Tech Mono", "--default-font-family": "Share Tech Mono"}} direction={`row`} gap={`3`}>
  <RadixThemesIconButton css={{"padding": "6px"}} variant={`soft`}>
  <LucideUsersIcon css={{"weight": 16, "height": 16, "color": "var(--current-color)"}}/>
</RadixThemesIconButton>
  {`Team`}
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
</RadixThemesFlex>
  <RadixThemesBox css={{"paddingLeft": "250px"}}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"position": "fixed", "width": "calc(100% - 250px)", "top": "0px", "zIndex": "1000", "paddingInlineStart": "2em", "paddingInlineEnd": "2em", "paddingTop": "2em", "paddingBottom": "1em", "backdropFilter": "blur(10px)"}} direction={`row`} gap={`3`}>
  <RadixThemesHeading css={{"fontFamily": "Share Tech Mono", "--default-font-family": "Share Tech Mono"}} size={`7`}>
  {`Tools`}
</RadixThemesHeading>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesDropdownMenu.Root css={{"variant": "soft", "fontFamily": "Share Tech Mono", "--default-font-family": "Share Tech Mono"}}>
  <RadixThemesDropdownMenu.Trigger>
  <RadixThemesButton css={{"fontFamily": "Share Tech Mono", "--default-font-family": "Share Tech Mono"}} variant={`soft`}>
  {`Menu`}
  <LucideChevronDownIcon css={{"weight": 16, "height": 16, "color": "var(--current-color)"}}/>
</RadixThemesButton>
</RadixThemesDropdownMenu.Trigger>
  <RadixThemesDropdownMenu.Content css={{"fontFamily": "Share Tech Mono", "--default-font-family": "Share Tech Mono"}} variant={`soft`}>
  <RadixThemesDropdownMenu.Item>
  {`Settings`}
</RadixThemesDropdownMenu.Item>
  <RadixThemesDropdownMenu.Item>
  {`Profile`}
</RadixThemesDropdownMenu.Item>
  <RadixThemesDropdownMenu.Item>
  {`Logout`}
</RadixThemesDropdownMenu.Item>
</RadixThemesDropdownMenu.Content>
</RadixThemesDropdownMenu.Root>
</RadixThemesFlex>
  <RadixThemesBox css={{"marginTop": "calc(50px + 2em)", "padding": "2em"}}>
  <RadixThemesText as={`p`}>
  {`placeholder`}
</RadixThemesText>
</RadixThemesBox>
</RadixThemesBox>
  <RadixThemesFlex css={{"display": "flex", "alignItems": "center", "justifyContent": "center", "width": "100%"}}>
  <Link_45925b1e7b16944cfa98bcd9d4959bc7/>
</RadixThemesFlex>
</RadixThemesBox>
  <NextHead>
  <title>
  {`Reflex Example | Tools`}
</title>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
