/** @jsxImportSource @emotion/react */


import { Fragment, useContext } from "react"
import { Badge as RadixThemesBadge, Box as RadixThemesBox, Button as RadixThemesButton, Card as RadixThemesCard, DropdownMenu as RadixThemesDropdownMenu, Flex as RadixThemesFlex, Heading as RadixThemesHeading, IconButton as RadixThemesIconButton, Link as RadixThemesLink, Separator as RadixThemesSeparator, Table as RadixThemesTable, Text as RadixThemesText } from "@radix-ui/themes"
import NextLink from "next/link"
import { BarChart3Icon as LucideBarChart3Icon, ChevronDownIcon as LucideChevronDownIcon, SettingsIcon as LucideSettingsIcon, UsersIcon as LucideUsersIcon } from "lucide-react"
import { Grid, GridItem, Stat, StatArrow, StatHelpText, StatNumber } from "@chakra-ui/react"
import { Area as RechartsArea, Legend as RechartsLegend, Line as RechartsLine, Pie as RechartsPie, ResponsiveContainer as RechartsResponsiveContainer, XAxis as RechartsXAxis, YAxis as RechartsYAxis } from "recharts"
import dynamic from "next/dynamic"
import { ColorModeContext } from "/utils/context"
import { isTrue } from "/utils/state"
import NextHead from "next/head"

const RechartsPieChart = dynamic(() => import('recharts').then((mod) => mod.PieChart), { ssr: false });
const RechartsLineChart = dynamic(() => import('recharts').then((mod) => mod.LineChart), { ssr: false });
const RechartsAreaChart = dynamic(() => import('recharts').then((mod) => mod.AreaChart), { ssr: false });


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
  {`Dashboard`}
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
  <Grid sx={{"width": "100%", "gap": 4, "rowGap": 8}} templateColumns={`repeat(4, 1fr)`}>
  <GridItem colSpan={1} rowSpan={1}>
  <RadixThemesCard css={{"boxShadow": "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;"}}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`3`}>
  <RadixThemesText as={`p`}>
  {`Today's Money`}
</RadixThemesText>
  <Stat>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <StatNumber sx={{"color": "var(--green-9)"}}>
  {`$53,000`}
</StatNumber>
  <StatHelpText>
  <StatArrow type={`increase`}/>
  {`2%`}
</StatHelpText>
</RadixThemesFlex>
</Stat>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesCard>
</GridItem>
  <GridItem colSpan={1} rowSpan={1}>
  <RadixThemesCard css={{"boxShadow": "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;"}}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`3`}>
  <RadixThemesText as={`p`}>
  {`Today's Users`}
</RadixThemesText>
  <Stat>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <StatNumber sx={{"color": "var(--green-9)"}}>
  {`2,300`}
</StatNumber>
  <StatHelpText>
  <StatArrow type={`increase`}/>
  {`5%`}
</StatHelpText>
</RadixThemesFlex>
</Stat>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesCard>
</GridItem>
  <GridItem colSpan={1} rowSpan={1}>
  <RadixThemesCard css={{"boxShadow": "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;"}}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`3`}>
  <RadixThemesText as={`p`}>
  {`Today's Orders`}
</RadixThemesText>
  <Stat>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <StatNumber sx={{"color": "var(--red-9)"}}>
  {`1,400`}
</StatNumber>
  <StatHelpText>
  <StatArrow type={`decrease`}/>
  {`3%`}
</StatHelpText>
</RadixThemesFlex>
</Stat>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesCard>
</GridItem>
  <GridItem colSpan={1} rowSpan={1}>
  <RadixThemesCard css={{"boxShadow": "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;"}}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`3`}>
  <RadixThemesText as={`p`}>
  {`Today's Sales`}
</RadixThemesText>
  <Stat>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <StatNumber sx={{"color": "var(--green-9)"}}>
  {`$23,000`}
</StatNumber>
  <StatHelpText>
  <StatArrow type={`increase`}/>
  {`2%`}
</StatHelpText>
</RadixThemesFlex>
</Stat>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesCard>
</GridItem>
  <GridItem colSpan={3} rowSpan={2}>
  <RadixThemesCard css={{"boxShadow": "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;"}}>
  <RechartsResponsiveContainer height={300} minWidth={200} width={`100%`}>
  <RechartsLineChart data={[{"name": "Page A", "uv": 4000, "pv": 2400, "amt": 2400}, {"name": "Page B", "uv": 3000, "pv": 1398, "amt": 2210}, {"name": "Page C", "uv": 2000, "pv": 9800, "amt": 2290}, {"name": "Page D", "uv": 2780, "pv": 3908, "amt": 2000}, {"name": "Page E", "uv": 1890, "pv": 4800, "amt": 2181}, {"name": "Page F", "uv": 2390, "pv": 3800, "amt": 2500}, {"name": "Page G", "uv": 3490, "pv": 4300, "amt": 2100}]} height={`100%`} width={`100%`}>
  <RechartsLine dataKey={`pv`} stroke={`#8884d8`}/>
  <RechartsLine dataKey={`uv`} stroke={`var(--accent-8)`}/>
  <RechartsXAxis dataKey={`name`} includeHidden={false}/>
  <RechartsYAxis/>
  <RechartsLegend/>
</RechartsLineChart>
</RechartsResponsiveContainer>
</RadixThemesCard>
</GridItem>
  <GridItem colSpan={1} rowSpan={2}>
  <RadixThemesCard css={{"boxShadow": "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;"}}>
  <RechartsResponsiveContainer height={300} minWidth={200} width={`100%`}>
  <RechartsPieChart height={`100%`} width={`100%`}>
  <RechartsPie cx={`50%`} cy={`50%`} data={[{"name": "Group A", "value": 400, "fill": "var(--red-7)"}, {"name": "Group B", "value": 300, "fill": "var(--green-7)"}, {"name": "Group C", "value": 300, "fill": "var(--purple-7)"}, {"name": "Group D", "value": 200, "fill": "var(--blue-7)"}, {"name": "Group E", "value": 278, "fill": "var(--yellow-7)"}, {"name": "Group F", "value": 189, "fill": "var(--pink-7)"}]} dataKey={`value`} label={true} nameKey={`name`}/>
  <RechartsLegend/>
</RechartsPieChart>
</RechartsResponsiveContainer>
</RadixThemesCard>
</GridItem>
  <GridItem colSpan={4} rowSpan={2}>
  <RadixThemesTable.Root>
  <RadixThemesTable.Header>
  <RadixThemesTable.Row>
  <RadixThemesTable.ColumnHeaderCell>
  {`Full name`}
</RadixThemesTable.ColumnHeaderCell>
  <RadixThemesTable.ColumnHeaderCell>
  {`Email`}
</RadixThemesTable.ColumnHeaderCell>
  <RadixThemesTable.ColumnHeaderCell>
  {`Group`}
</RadixThemesTable.ColumnHeaderCell>
</RadixThemesTable.Row>
</RadixThemesTable.Header>
  <RadixThemesTable.Body>
  <RadixThemesTable.Row>
  <RadixThemesTable.RowHeaderCell>
  {`Danilo Sousa`}
</RadixThemesTable.RowHeaderCell>
  <RadixThemesTable.Cell>
  {`danilo@example.com`}
</RadixThemesTable.Cell>
  <RadixThemesTable.Cell>
  <RadixThemesBadge>
  {`Developer`}
</RadixThemesBadge>
</RadixThemesTable.Cell>
</RadixThemesTable.Row>
  <RadixThemesTable.Row>
  <RadixThemesTable.RowHeaderCell>
  {`Zahra Ambessa`}
</RadixThemesTable.RowHeaderCell>
  <RadixThemesTable.Cell>
  {`zahra@example.com`}
</RadixThemesTable.Cell>
  <RadixThemesTable.Cell>
  <RadixThemesBadge variant={`surface`}>
  {`Admin`}
</RadixThemesBadge>
</RadixThemesTable.Cell>
</RadixThemesTable.Row>
  <RadixThemesTable.Row>
  <RadixThemesTable.RowHeaderCell>
  {`Jasper Eriksson`}
</RadixThemesTable.RowHeaderCell>
  <RadixThemesTable.Cell>
  {`jasper@example.com`}
</RadixThemesTable.Cell>
  <RadixThemesTable.Cell>
  <RadixThemesBadge>
  {`Developer`}
</RadixThemesBadge>
</RadixThemesTable.Cell>
</RadixThemesTable.Row>
</RadixThemesTable.Body>
</RadixThemesTable.Root>
</GridItem>
  <GridItem colSpan={3} rowSpan={2}>
  <RadixThemesCard css={{"boxShadow": "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;"}}>
  <RechartsResponsiveContainer height={400} minWidth={200} width={`100%`}>
  <RechartsAreaChart data={[{"name": "Page A", "uv": 4000, "pv": 2400, "amt": 2400}, {"name": "Page B", "uv": 3000, "pv": 1398, "amt": 2210}, {"name": "Page C", "uv": 2000, "pv": 9800, "amt": 2290}, {"name": "Page D", "uv": 2780, "pv": 3908, "amt": 2000}, {"name": "Page E", "uv": 1890, "pv": 4800, "amt": 2181}, {"name": "Page F", "uv": 2390, "pv": 3800, "amt": 2500}, {"name": "Page G", "uv": 3490, "pv": 4300, "amt": 2100}]} height={`100%`} width={`100%`}>
  <RechartsArea dataKey={`pv`} fill={`#8884d8`} stroke={`#8884d8`}/>
  <RechartsArea dataKey={`uv`} fill={`var(--accent-8)`} stroke={`var(--accent-8)`}/>
  <RechartsXAxis dataKey={`name`} includeHidden={false}/>
  <RechartsYAxis/>
  <RechartsLegend/>
</RechartsAreaChart>
</RechartsResponsiveContainer>
</RadixThemesCard>
</GridItem>
</Grid>
</RadixThemesBox>
</RadixThemesBox>
  <RadixThemesFlex css={{"display": "flex", "alignItems": "center", "justifyContent": "center", "width": "100%"}}>
  <Link_45925b1e7b16944cfa98bcd9d4959bc7/>
</RadixThemesFlex>
</RadixThemesBox>
  <NextHead>
  <title>
  {`Reflex Example | Index`}
</title>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
