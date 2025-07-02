<script lang="ts">
	import Chart from '$lib/Chart.svelte';
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();
	let cardRects = $state([]);
	let contentRects = $state([]);
	let chartRects = $state([]);
</script>
{@debug data}
<h1>Just testing</h1>
{#each data.data as card, i}
	<div class="card" bind:contentRect={cardRects[i]}>
		{#if card.display_title}
			<h2>{card.title}</h2>
		{/if}
		<div class="card-content" bind:contentRect={contentRects[i]}>
		{#each card.card_content as content}
			{#if content.infographic && !!contentRects[i]}
				{#each content.infographic.content as info}
					{#if info.location === "card background"}
						{#if info.svg}
							<div class="background" style="width: {contentRects[i].width}px; height: {contentRects[i].height}px;">{@html info.svg}</div>
						{/if}
					{/if}
					{#if info.location === "card top"}
						{#if info.svg}
							<div class="icon">{@html info.svg}</div>
						{/if}
					{/if}
					{#if info.location === "before stat"}
						{#if info.text}
							<div>{info.text}</div>
						{/if}
					{/if}
					{#if info.number}
						<div>{info.number} {info.units}</div>						
					{/if}
					{#if info.location === "after stat"}
						{#if info.text}
							<div>{info.text}</div>
						{/if}
					{/if}
					{#if info.location === "card bottom"}
						{#if info.svg}
							<div class="icon">{@html info.svg}</div>
						{/if}
					{/if}
				{/each}
			{:else if content.chart && !!contentRects[i]}
				{#if content.chart.display_title}
					<h3>{content.chart.title}</h3>
				{/if}
				{#each content.chart.datasource as source}
					<div class="chart" bind:contentRect={chartRects[i]}>
						<Chart source={source.link_to_file} data={source.data} rect={chartRects[i]} type={content.chart.type}/>
					</div>
				{/each}
			{/if}
		{/each}
		</div>
	</div>
{/each}

<style>
	.card {
		height: 450px;
		border-radius: 20px;
		background-color: lightgray;
		padding: 20px;
		margin: 0 0 20px 0;
	}
	.card-content {
		max-height: 350px;
	}
	.chart {
		height: 300px;
	}
	.background {
		position: relative;
		overflow: hidden;
	}
</style>