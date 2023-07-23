import axois from 'axios'

const service = axois.create({
    baseURL: import.meta.env.APP_BASE_API_URL,
    timeout: 6000,
    headers: {
        'X-Custom-Header': 'foobar'
    }
});

/**
 * 查询每只股票的评论量
 */
export const getStockNameAndCommentQuantity = () => {
    return service.request({
        url: '/getStockNameAndCommentQuantity',
        method: 'get'
    })
}

/**
 * 查询每天的评论量
 */
export const getDayCommentQuantity = (params) => {
    return service.request({
        url: '/getDayCommentQuantity',
        method: 'post',
        data: params
    })
}

/**
 * 查询每天各股票的评论量
 */
export const getStockCommentQuantityByDay = (params) => {
    return service.request({
        url: '/getStockCommentQuantityByDay',
        method: 'post',
        data: params
    })
}

/**
 * 查询股票名称
 */
export const getStockName = () => {
    return service.request({
        url: '/getStockName',
        method: 'get'
    })
}

/**
 * 查询每只股票的评分
 */
export const getStockAndProbability = (params) => {
    return service.request({
        url: '/getStockAndProbability',
        method: 'post',
        data: params
    })
}

/**
 * 查询每只股票每天的评分均值
 */
export const getTradeDateAvgProbability = (params) => {
    return service.request({
        url: '/getTradeDateAvgProbability',
        method: 'post',
        data: params
    })
}

export const sentimentAnalysisAndSave = (text) => {
    return service.request({
        url: '/sentimentAnalysisAndSave',
        method: 'get',
        params: {
            text: text
        }
    })
}