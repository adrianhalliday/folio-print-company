<template>
	<div class="graphic-3-container">
		<div class="container">
			<div
				v-for="(circle, i) in circles"
				class="circle"
				:class="circle"
				:key="i"
				ref="circles"
				@mouseenter="setHover(i)"
				@mouseleave="removeHover(i)"
			>
				<div class="inner front"></div>
				<div class="inner back"></div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	computed: {
		circles() {
			let circles = [];

			for (let i = 0; i < 25; i++) {
				circles[i] = "circle-" + (i + 1);
			}
			return circles;
		},
	},
	methods: {
		setHover(i) {
			this.$refs.circles[i].classList.add("hovered");
		},
		removeHover(i) {
			setTimeout(
				() => this.$refs.circles[i].classList.remove("hovered"),
				700
			);
		},
	},
};
</script>

<style lang="scss" scoped>
.graphic-3-container {
	width: 100%;
	height: 0;
	padding-top: 100%;
	position: relative;

	.container {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		grid-template-rows: repeat(5, 1fr);
	}

	// Define delay mappings
	$transition-delays: (
		0.05s: (
			1,
		),
		0.1s: (
			2,
			6,
		),
		0.15s: (
			3,
			11,
		),
		0.2s: (
			4,
			16,
		),
		0.25s: (
			5,
			21,
		),
		0.3s: (
			7,
		),
		0.35s: (
			8,
			12,
		),
		0.4s: (
			9,
			17,
		),
		0.45s: (
			10,
			22,
		),
		0.5s: (
			13,
		),
		0.55s: (
			14,
			15,
			18,
			23,
		),
		0.6s: (
			19,
		),
		0.65s: (
			20,
			24,
		),
		0.7s: (
			25,
		),
	);

	.circle {
		transform-style: preserve-3d;
		position: relative;
		transform: rotate(-45deg);

		// Generate nth-child selectors for each delay
		@each $delay, $children in $transition-delays {
			@each $child in $children {
				&:nth-child(#{$child}) .inner {
					transition-delay: #{$delay};
				}
			}
		}
	}

	.inner {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		border-radius: 50%;
		backface-visibility: hidden;
		transition: transform 0.4s ease-in-out;

		&.back {
			transform: rotateX(0deg);
		}

		&.front {
			transform: rotateX(180deg);
		}
	}

	&.inview-active {
		.circle {
			&.hovered {
				.inner {
					transition-delay: 0s;
					&.back {
						animation: spin-back 0.4s linear forwards;
					}
					&.front {
						animation: spin 0.4s linear forwards;
					}
				}
			}
		}

		.inner {
			&.back {
				transform: rotateX(-180deg);
			}
			&.front {
				transform: rotateX(0deg);
			}
		}
	}
}

@keyframes spin {
	0% {
		transform: rotateX(0deg);
	}
	99% {
		transform: rotateX(180deg);
	}
	100% {
		transform: rotateX(0deg);
	}
}
@keyframes spin-back {
	0% {
		transform: rotateX(-180deg);
	}
	99% {
		transform: rotateX(0deg);
	}
	100% {
		transform: rotateX(-180deg);
	}
}
</style>
