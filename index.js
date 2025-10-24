<script>
  window.watsonAssistantChatOptions = {
    integrationID: "c7ab87f0-a935-4235-a6c7-3eb6cddecba5", // The ID of this integration.
    region: "eu-de", // The region your integration is hosted in.
    serviceInstanceID: "914df0d3-1692-434c-af84-3a79898b2352", // The ID of your service instance.
    onLoad: async (instance) => { await instance.render(); }
  };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
  });
</script>
