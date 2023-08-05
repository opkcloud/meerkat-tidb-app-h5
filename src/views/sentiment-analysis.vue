<template>
	<div>
		<Form>
			<FormItem label="Input stock comment">
				<Input v-model="textarea" type="textarea" :autosize="{minRows: 5,maxRows: 8}" placeholder="Please enter a comment on the stock trend..."></Input>
			</FormItem>
			<FormItem>
				<Button type="primary" @click="submit" :loading="loading">Submit</Button>
				<Button style="margin-left: 8px" @click="handleReset">Reset</Button>
			</FormItem>
		</Form>
		<DescriptionList title="Scoring Result">
			<Description term="sentiment : ">
				{{ this.analysisResult.sentiment }}
			</Description>
			<Description term="probability : ">
				{{ this.analysisResult.probability }}
			</Description>
		</DescriptionList>
    <DescriptionList title="">
			<Description term="Stock comments total count : ">
				{{ this.stockCommentTotalCount }}
			</Description>
		</DescriptionList>
	</div>
</template>

<script>
import { sentimentAnalysisAndSave, getStockCommentTotalCount } from '@/api/analysis'

export default {
  name: 'analysis-page',
  data() {
    return {
      textarea: '',
      loading: false,
      analysisResult: {
        sentiment: '',
        probability: ''
      },
      stockCommentTotalCount: 0
    }
  },
  methods: {
    handleReset() {
      this.textarea = ''
    },
    submit() {
      this.loading = true
      this.analysisResult = {}
      if (this.textarea === '') {
        this.$Message.warning('Please enter a comment on the stock trend')
        return
      }
      sentimentAnalysisAndSave(this.textarea).then((res) => {
        if (res.status === 200 && res.data.code === 200) {
          this.analysisResult.sentiment = res.data.data.sentiment
          this.analysisResult.probability = res.data.data.probability
          this.getStockCommentTotalCount()
        }
      }).finally(() => {
        this.loading = false
      })
    },
    getStockCommentTotalCount() {
      getStockCommentTotalCount().then((res) => {
        this.stockCommentTotalCount = res.data.data
      })
    }
  },
  mounted() {
    this.getStockCommentTotalCount()
  }
}

</script>

<style>
</style>
