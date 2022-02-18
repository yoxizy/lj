body = $response.body.replace(/6500.00/g, '16500.00').replace(/346197.44/g, '356197.44').replace(/17902.56/g, '7902.56').replace(/13198.38/g, '3198.38');
$done({body});
