import reflex as rx

from reflex_example.navigation import navbar
from reflex_example.template import template

@template
def team() -> rx.Component:
    return rx.box(
            navbar(heading="Team"),
            rx.box(
                rx.text("placeholder"),
                margin_top="calc(50px + 2em)",
                padding="2em",
            ),
            padding_left="250px",
        )

