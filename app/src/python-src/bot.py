# Dynamically activate virtualenv on Windows
activate_this = 'bot/Scripts/activate_this.py'
with open(activate_this, "rb") as source_file:
    code = compile(source_file.read(), activate_this, "exec")
exec(code, dict(__file__=activate_this))

# Test the env activate
import sys
if hasattr(sys, 'real_prefix'):
    print('ok')
# End test

from searchtweets import load_credentials, gen_rule_payload, ResultStream

premium_search_args = load_credentials("config.yaml", yaml_key="tweetbot", env_overwrite=False)

rule = gen_rule_payload("#100DaysOfCode", results_per_call=100, from_date="2020-04-14 00:01", to_date="2020-04-14 23:59")

rs = ResultStream(rule_payload=rule, max_results=100, **premium_search_args)

tweets = list(rs.stream())
print(tweets)