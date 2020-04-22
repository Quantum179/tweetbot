from searchtweets import load_credentials, gen_rule_payload, ResultStream

premium_search_args = load_credentials("config.yaml", yaml_key="search_tweets_api", env_overwrite=False)

rule = gen_rule_payload("#100DaysOfCode", results_per_call=100, from_date="2020-04-14 00:01", to_date="2020-04-14 23:59")

rs = ResultStream(rule_payload=rule, max_results=100, **premium_search_args)

tweets = list(rs.stream())

print(tweets)