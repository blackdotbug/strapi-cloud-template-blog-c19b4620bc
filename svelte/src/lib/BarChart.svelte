<script lang="ts">
    let { source, data, rect } = $props();
        let fetched = $state<[] | undefined>(undefined);
    let isLoading = $state(true);
    let error = $state<string | undefined>(undefined);

    $effect(async () => {
        if (source) {
            fetched = await fetch_csv(source)
            if (fetched && fetched.length > 0) {
                isLoading = false
                error = undefined
            } else {
                isLoading = true
                error = "data fetch error"
            }
        } else if (data) {
            isLoading = false
        } else {
            isLoading = true
        }
    })

</script>

    <svg width={rect.width} height={rect.height}>
        <g>
            <text x={rect.width/2} y={rect.height/2}>bar chart here</text>
        </g>
    </svg>
