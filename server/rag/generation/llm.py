import os
from openai import OpenAI
from zhipuai import ZhipuAI
from server.logger.logger_config import my_logger as logger


class LLMGenerator:
    def __init__(self) -> None:
        self.llm_name = os.getenv('LLM_NAME')
        if self.llm_name == 'OpenAI':
            api_key = os.getenv('OPENAI_API_KEY')
            self.client = OpenAI(api_key=api_key)
            self.model_name = os.getenv('GPT_MODEL_NAME')
        elif self.llm_name == 'ZhipuAI':
            api_key = os.getenv('ZHIPUAI_API_KEY')
            self.client = ZhipuAI(api_key=api_key)
            self.model_name = os.getenv('GLM_MODEL_NAME')
        elif self.llm_name == 'Ollama':
            ollama_base_url = os.getenv('OLLAMA_BASE_URL')
            self.client = OpenAI(
                base_url = f"{ollama_base_url}/v1",
                api_key='ollama', # required, but unused
            )
            self.model_name = os.getenv('OLLAMA_MODEL_NAME')
        else:
            raise ValueError(f"Unsupported LLM_NAME: '{self.llm_name}'. Must be in['OpenAI', 'ZhipuAI', 'Ollama']")

    def generate(self, prompt: str, is_streaming: bool = False):
        if is_streaming:
            if self.llm_name == 'OpenAI':
                response = self.client.chat.completions.create(
                    model=self.model_name,
                    messages=[{"role": "system", "content": prompt}],
                    temperature=0,
                    #top_p=0.7,
                    stream=True
                )
            elif self.llm_name == 'ZhipuAI':
                response = self.client.chat.completions.create(
                    model=self.model_name,
                    messages=[{"role": "user", "content": prompt}],
                    temperature=0.1,
                    #top_p=0.7,
                    stream=True
                )
            else:
                response = self.client.chat.completions.create(
                    model=self.model_name,
                    messages=[{"role": "user", "content": prompt}],
                    temperature=0,
                    #top_p=0.7,
                    stream=True
                )
            return response
        else:
            if self.llm_name == 'OpenAI':
                response = self.client.chat.completions.create(
                    model=self.model_name,
                    response_format={"type": "json_object"},
                    messages=[{"role": "system", "content": prompt}],
                    temperature=0,
                    #top_p=0.7,
                    stream=False
                )
            elif self.llm_name == 'ZhipuAI':
                response = self.client.chat.completions.create(
                    model=self.model_name,
                    messages=[{"role": "user", "content": prompt}],
                    temperature=0.1,
                    #top_p=0.7,
                    stream=False
                )
            else:
                response = self.client.chat.completions.create(
                    model=self.model_name,
                    response_format={"type": "json_object"},
                    messages=[{"role": "user", "content": prompt}],
                    temperature=0,
                    #top_p=0.7,
                    stream=False
                )
            return response


llm_generator = LLMGenerator()
