<html>

<head>
    <title>首页</title>
</head>

<body>
    <ul class="news-view view">
        首页 {% block dataList %}
        <div>{{ data.msg }}</div>{% endblock %}
    </ul>
</body>

</html>