<script lang="ts">
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();
</script>

<h1>Just testing</h1>
{#each data.data as card}
	<div>
		{#if card.display_title}
			<h2>{card.title}</h2>
		{/if}
		{#each card.card_content as content}
			{#if content.infographic}
				{#each content.infographic.content as info}
					{#if info.number}
						<div>{info.number} {info.units}</div>						
					{/if}
					{#if info.text}
						<div>{info.text}</div>
					{/if}
					{#if info.svg}
						{@html info.svg}
					{/if}
				{/each}
			{:else if content.chart}
				{#if content.chart.display_title}
					<h3>{content.chart.title}</h3>
				{/if}
			{/if}
		{/each}
	</div>
{/each}