<template>
	<div>
		<Form>
			<FormItem label="Input stock comment">
				<Input v-model="textarea" type="textarea" :autosize="{minRows: 5,maxRows: 8}" placeholder="Please enter a comment on the stock trend..."></Input>
			</FormItem>
			<FormItem>
				<Button type="primary" @click="submit">Submit</Button>
				<Button style="margin-left: 8px" @click="handleReset">Reset</Button>
			</FormItem>
		</Form>
		<DescriptionList title="评分结果">
			<Description term="sentiment : ">
				{{ this.analysisResult.sentiment }}
			</Description>
			<Description term="probability : ">
				{{ this.analysisResult.probability }}
			</Description>
		</DescriptionList>
	</div>
</template>

<script>
import { sentimentAnalysisAndSave } from '@/api/analysis'

export default {
  name: 'analysis-page',
  data() {
    return {
      textarea: '',
      analysisResult: {
        sentiment: '',
        probability: ''
      }
    }
  },
  methods: {
    handleReset() {
      this.textarea = ''
    },
    submit() {
      if (this.textarea === '') {
        this.$Message.warning('Please enter a comment on the stock trend')
        return
      }
      sentimentAnalysisAndSave(this.textarea).then((res) => {
        if (res.status === 200 && res.data.code === 200) {
          this.analysisResult.sentiment = res.data.data.sentiment
          this.analysisResult.probability = res.data.data.probability
        }
      })
    }
  }
}

</script>

<style>
</style>
