/* ══════════════════════════════════════
   TRANSLATIONS
══════════════════════════════════════ */
const TRANSLATIONS = {
  en: {
    months: ['January','February','March','April','May','June','July','August','September','October','November','December'],
    cats: {Groceries:'Groceries',Transport:'Transport',Home:'Home',Fun:'Fun',Other:'Other'},
    catKeys: ['Groceries','Transport','Home','Fun','Other'],
    used: 'USED', spent: 'Spent', remaining: 'Remaining',
    projection: 'End-of-month projection',
    catChart: 'Expenses by category', lastExpenses: 'Latest expenses',
    noExpenses: 'No expenses yet', noData: 'No data',
    shoppingList: 'Shopping list', noShopping: 'No items in your list',
    shopDescPlaceholder: 'e.g. New shoes…', addItem: 'Add item',
    addTitle: ['New ','Expense'],
    amount: 'Amount', category: 'Category', description: 'Description',
    descPlaceholder: 'e.g. Birthday gift…',
    recurring: 'Recurring expense', recurringSub: 'Repeats every month',
    addBtn: 'Add Expense',
    historyTitle: ['Histo','ry'],
    allCats: 'All categories', noExpensesHist: 'No expenses',
    statsTitle: ['Statis','tics'],
    catDist: 'Category distribution', monthlyTrend: 'Monthly trend', insufficientData: 'Insufficient data',
    settingsTitle: ['Sett','ings'],
    language: 'Language',
    monthlyBudget: 'Monthly budget', budgetSaved: 'Budget saved', saveBudget: 'Save',
    warnThreshold: 'Orange warning threshold', warnSub: 'Alert when you exceed this % of budget',
    recurringExpenses: 'Recurring expenses', noRecurring: 'No recurring expenses',
    tutorialTitle: '📲 Add to Home Screen',
    deleteSub: 'Delete all expenses and budgets from every month',
    deleteAll: 'Delete all data',
    navHome: 'Home', navHist: 'History', navStats: 'Stats', navSet: 'Settings',
    editExpense: 'Edit expense', editAmount: 'Amount', editDesc: 'Description',
    deleteBtn: 'Delete', saveBtn: 'Save',
    chipOk: 'Everything on track', chipWarn: 'You have used {pct}% of your budget',
    chipDanger: 'Running out of budget!', chipEmpty: 'Budget exhausted',
    confirmDeleteExp: 'Delete this expense?', confirmDeleteAll: 'Delete ALL data? This action is irreversible.',
    noExportData: 'No expenses to export',
    csvHeaders: 'Date,Category,Amount,Description,Recurring',
    csvYes: 'Yes', csvNo: 'No',
    recBadge: '↻ recurring',
    tutS1Title:'Open MoneyFlow in Safari',tutS1Desc:'Make sure you are using Safari. Chrome and other browsers do not support installation as an app on iPhone.',
    tutS2Title:'Tap the Share button',tutS2Desc:'At the bottom center you\'ll find the icon with an arrow pointing up. Tap it to open the share menu.',
    tutS3Title:'Scroll and tap "Add to Home Screen"',tutS3Desc:'In the menu that appears from the bottom, scroll to find this item with the "+" icon. Tap it.',
    tutS4Title:'Confirm with "Add"',tutS4Desc:'A preview will appear with the app name. Tap "Add" in the top right corner to complete the installation.',
    tutSafariTip:'On iOS, apps added via Safari run full screen without the browser bar, just like a native app.',
    tutC1Title:'Open MoneyFlow in Chrome',tutC1Desc:'On Android, use Chrome for the best experience. On iPhone, Safari is preferred, but Chrome works too.',
    tutC2Title:'Tap the three dots in the top right',tutC2Desc:'Chrome\'s main menu opens by tapping "⋮" in the top right corner.',
    tutC3Title:'Select "Add to Home Screen"',tutC3Desc:'In the dropdown menu, look for "Add to Home Screen" or "Install app". On Android a banner may also appear automatically.',
    tutC4Title:'Tap "Add" to confirm',tutC4Desc:'A confirmation popup will appear. Tap "Add" and the MoneyFlow icon will appear on your Home Screen.',
    tutChromeTip:'On Android with Chrome, the app is installed as a PWA and appears in your app list with its own icon and splash screen.',
    tapHere:'TAP HERE', svgMessages:'Messages', svgAddHome:'Add to Home Screen',
    svgCancel:'Cancel', svgAddToHome:'Add to Home', svgAdd:'Add',
    svgNewTab:'🔖  New tab', svgBookmarks:'⭐  Bookmarks', svgAddHome2:'📲  Add to Home', svgPrint:'🖨️  Print',
  },
  it: {
    months: ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'],
    cats: {Groceries:'Alimentari',Transport:'Trasporti',Home:'Casa',Fun:'Svago',Other:'Altro'},
    catKeys: ['Groceries','Transport','Home','Fun','Other'],
    used:'USATO',spent:'Speso',remaining:'Residuo',
    projection:'Proiezione fine mese',
    catChart:'Spese per categoria',lastExpenses:'Ultime spese',
    noExpenses:'Nessuna spesa ancora',noData:'Nessun dato',
    shoppingList:'Lista della spesa',noShopping:'Nessun articolo in lista',
    shopDescPlaceholder:'Es. Scarpe nuove…',addItem:'Aggiungi articolo',
    addTitle:['Nuova ','Spesa'],
    amount:'Importo',category:'Categoria',description:'Descrizione',
    descPlaceholder:'Es. Regalo compleanno…',
    recurring:'Spesa ricorrente',recurringSub:'Si ripete ogni mese',
    addBtn:'Aggiungi Spesa',
    historyTitle:['Crono','logia'],
    allCats:'Tutte le categorie',noExpensesHist:'Nessuna spesa',
    statsTitle:['Statisti','che'],
    catDist:'Distribuzione categorie',monthlyTrend:'Andamento mensile',insufficientData:'Dati insufficienti',
    settingsTitle:['Impo','stazioni'],
    language:'Lingua',
    monthlyBudget:'Budget mensile',budgetSaved:'Budget salvato',saveBudget:'Salva',
    warnThreshold:'Soglia avviso arancione',warnSub:'Avviso quando superi questa % del budget',
    recurringExpenses:'Spese ricorrenti',noRecurring:'Nessuna spesa ricorrente',
    tutorialTitle:'📲 Aggiungi alla schermata Home',
    deleteSub:'Cancella spese e budget di tutti i mesi',
    deleteAll:'Elimina tutto',
    navHome:'Home',navHist:'Storico',navStats:'Stats',navSet:'Set',
    editExpense:'Modifica spesa',editAmount:'Importo',editDesc:'Descrizione',
    deleteBtn:'Elimina',saveBtn:'Salva',
    chipOk:'Tutto sotto controllo',chipWarn:'Hai usato il {pct}% del budget',
    chipDanger:'Stai esaurendo il budget!',chipEmpty:'Budget esaurito',
    confirmDeleteExp:'Eliminare questa spesa?',confirmDeleteAll:'Eliminare TUTTI i dati? Questa azione è irreversibile.',
    noExportData:'Nessuna spesa da esportare',
    csvHeaders:'Data,Categoria,Importo,Descrizione,Ricorrente',
    csvYes:'Sì',csvNo:'No',
    recBadge:'↻ ricorrente',
    tutS1Title:'Apri MoneyFlow in Safari',tutS1Desc:'Assicurati di usare Safari. Chrome e altri browser non supportano l\'installazione come app su iPhone.',
    tutS2Title:'Tocca il pulsante Condividi',tutS2Desc:'In basso al centro trovi l\'icona con la freccia verso l\'alto. Toccala per aprire il menu di condivisione.',
    tutS3Title:'Scorri e tocca "Aggiungi a schermata Home"',tutS3Desc:'Nel menu dal basso, scorri le opzioni per trovare questa voce con l\'icona "+". Toccala.',
    tutS4Title:'Conferma con "Aggiungi"',tutS4Desc:'Apparirà un\'anteprima con il nome dell\'app. Tocca "Aggiungi" in alto a destra per completare l\'installazione.',
    tutSafariTip:'Su iOS, le app aggiunte via Safari funzionano a schermo intero senza la barra di Safari, esattamente come un\'app nativa.',
    tutC1Title:'Apri MoneyFlow in Chrome',tutC1Desc:'Su Android usa Chrome per la migliore esperienza. Su iPhone preferisci Safari, ma Chrome funziona comunque.',
    tutC2Title:'Tocca i tre puntini in alto a destra',tutC2Desc:'Il menu principale di Chrome si apre toccando "⋮" nell\'angolo in alto a destra.',
    tutC3Title:'Seleziona "Aggiungi a schermata Home"',tutC3Desc:'Nel menu a tendina cerca "Aggiungi a schermata Home" o "Installa app". Su Android potrebbe apparire anche un banner automatico.',
    tutC4Title:'Tocca "Aggiungi" per confermare',tutC4Desc:'Apparirà un popup di conferma. Tocca "Aggiungi" e l\'icona di MoneyFlow apparirà nella schermata Home.',
    tutChromeTip:'Su Android con Chrome, l\'app viene installata come PWA e appare nella lista delle app con icona e splash screen.',
    tapHere:'TOCCA QUI',svgMessages:'Messaggi',svgAddHome:'Aggiungi a schermata Home',
    svgCancel:'Annulla',svgAddToHome:'Aggiungi a Home',svgAdd:'Aggiungi',
    svgNewTab:'🔖  Nuova scheda',svgBookmarks:'⭐  Aggiungi preferiti',svgAddHome2:'📲  Aggiungi a Home',svgPrint:'🖨️  Stampa',
  },
  es: {
    months:['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
    cats:{Groceries:'Compras',Transport:'Transporte',Home:'Hogar',Fun:'Ocio',Other:'Otro'},
    catKeys:['Groceries','Transport','Home','Fun','Other'],
    used:'USADO',spent:'Gastado',remaining:'Restante',
    projection:'Proyección fin de mes',catChart:'Gastos por categoría',lastExpenses:'Últimos gastos',
    noExpenses:'Sin gastos aún',noData:'Sin datos',addTitle:['Nuevo ','Gasto'],
    shoppingList:'Lista de compras',noShopping:'Sin artículos en la lista',
    shopDescPlaceholder:'Ej. Zapatos nuevos…',addItem:'Añadir artículo',
    amount:'Importe',category:'Categoría',description:'Descripción',descPlaceholder:'Ej. Regalo cumpleaños…',
    recurring:'Gasto recurrente',recurringSub:'Se repite cada mes',addBtn:'Añadir Gasto',
    historyTitle:['Histo','rial'],allCats:'Todas las categorías',noExpensesHist:'Sin gastos',
    statsTitle:['Estadís','ticas'],catDist:'Distribución por categoría',monthlyTrend:'Tendencia mensual',insufficientData:'Datos insuficientes',
    settingsTitle:['Ajus','tes'],language:'Idioma',
    monthlyBudget:'Presupuesto mensual',budgetSaved:'Presupuesto guardado',saveBudget:'Guardar',
    warnThreshold:'Umbral de aviso naranja',warnSub:'Aviso cuando superes este % del presupuesto',
    recurringExpenses:'Gastos recurrentes',noRecurring:'Sin gastos recurrentes',
    tutorialTitle:'📲 Añadir a pantalla de inicio',deleteSub:'Eliminar todos los gastos y presupuestos',deleteAll:'Eliminar todo',
    navHome:'Inicio',navHist:'Historial',navStats:'Stats',navSet:'Ajustes',
    editExpense:'Editar gasto',editAmount:'Importe',editDesc:'Descripción',deleteBtn:'Eliminar',saveBtn:'Guardar',
    chipOk:'Todo bajo control',chipWarn:'Has usado el {pct}% del presupuesto',chipDanger:'¡Casi sin presupuesto!',chipEmpty:'Presupuesto agotado',
    confirmDeleteExp:'¿Eliminar este gasto?',confirmDeleteAll:'¿Eliminar TODOS los datos? Esta acción es irreversible.',
    noExportData:'Sin gastos para exportar',csvHeaders:'Fecha,Categoría,Importe,Descripción,Recurrente',csvYes:'Sí',csvNo:'No',recBadge:'↻ recurrente',
    tutS1Title:'Abre MoneyFlow en Safari',tutS1Desc:'Asegúrate de usar Safari. Chrome y otros navegadores no soportan la instalación como app en iPhone.',
    tutS2Title:'Toca el botón Compartir',tutS2Desc:'En la parte inferior central encontrarás el icono con una flecha hacia arriba. Tócalo para abrir el menú.',
    tutS3Title:'Desplázate y toca "Añadir a inicio"',tutS3Desc:'En el menú que aparece desde abajo, desplázate para encontrar esta opción con el icono "+". Tócala.',
    tutS4Title:'Confirma con "Añadir"',tutS4Desc:'Aparecerá una vista previa con el nombre de la app. Toca "Añadir" arriba a la derecha para completar la instalación.',
    tutSafariTip:'En iOS, las apps añadidas con Safari funcionan a pantalla completa sin la barra del navegador.',
    tutC1Title:'Abre MoneyFlow en Chrome',tutC1Desc:'En Android usa Chrome. En iPhone es mejor Safari, pero Chrome también funciona.',
    tutC2Title:'Toca los tres puntos arriba a la derecha',tutC2Desc:'El menú principal de Chrome se abre tocando "⋮" en la esquina superior derecha.',
    tutC3Title:'Selecciona "Añadir a pantalla de inicio"',tutC3Desc:'Busca "Añadir a pantalla de inicio" o "Instalar app". En Android también puede aparecer un banner automático.',
    tutC4Title:'Toca "Añadir" para confirmar',tutC4Desc:'Aparecerá un popup de confirmación. Toca "Añadir" y el icono de MoneyFlow aparecerá en tu pantalla de inicio.',
    tutChromeTip:'En Android con Chrome, la app se instala como PWA y aparece en la lista de apps con su propio icono.',
    tapHere:'TOCA AQUÍ',svgMessages:'Mensajes',svgAddHome:'Añadir a inicio',svgCancel:'Cancelar',svgAddToHome:'Añadir a Inicio',svgAdd:'Añadir',
    svgNewTab:'🔖  Nueva pestaña',svgBookmarks:'⭐  Favoritos',svgAddHome2:'📲  Añadir a Inicio',svgPrint:'🖨️  Imprimir',
  },
  fr: {
    months:['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
    cats:{Groceries:'Courses',Transport:'Transport',Home:'Maison',Fun:'Loisirs',Other:'Autre'},
    catKeys:['Groceries','Transport','Home','Fun','Other'],
    used:'UTILISÉ',spent:'Dépensé',remaining:'Restant',
    projection:'Projection fin de mois',catChart:'Dépenses par catégorie',lastExpenses:'Dernières dépenses',
    noExpenses:'Aucune dépense',noData:'Aucune donnée',addTitle:['Nouvelle ','Dépense'],
    shoppingList:'Liste de courses',noShopping:'Aucun article dans la liste',
    shopDescPlaceholder:'Ex. Nouvelles chaussures…',addItem:'Ajouter un article',
    amount:'Montant',category:'Catégorie',description:'Description',descPlaceholder:'Ex. Cadeau anniversaire…',
    recurring:'Dépense récurrente',recurringSub:'Se répète chaque mois',addBtn:'Ajouter la dépense',
    historyTitle:['Histo','rique'],allCats:'Toutes les catégories',noExpensesHist:'Aucune dépense',
    statsTitle:['Statis','tiques'],catDist:'Répartition par catégorie',monthlyTrend:'Tendance mensuelle',insufficientData:'Données insuffisantes',
    settingsTitle:['Para','mètres'],language:'Langue',
    monthlyBudget:'Budget mensuel',budgetSaved:'Budget enregistré',saveBudget:'Enregistrer',
    warnThreshold:'Seuil d\'alerte orange',warnSub:'Alerte quand vous dépassez ce % du budget',
    recurringExpenses:'Dépenses récurrentes',noRecurring:'Aucune dépense récurrente',
    tutorialTitle:'📲 Ajouter à l\'écran d\'accueil',deleteSub:'Supprimer toutes les dépenses et budgets',deleteAll:'Tout supprimer',
    navHome:'Accueil',navHist:'Historique',navStats:'Stats',navSet:'Réglages',
    editExpense:'Modifier la dépense',editAmount:'Montant',editDesc:'Description',deleteBtn:'Supprimer',saveBtn:'Enregistrer',
    chipOk:'Tout sous contrôle',chipWarn:'Vous avez utilisé {pct}% du budget',chipDanger:'Budget presque épuisé !',chipEmpty:'Budget épuisé',
    confirmDeleteExp:'Supprimer cette dépense ?',confirmDeleteAll:'Supprimer TOUTES les données ? Cette action est irréversible.',
    noExportData:'Aucune dépense à exporter',csvHeaders:'Date,Catégorie,Montant,Description,Récurrent',csvYes:'Oui',csvNo:'Non',recBadge:'↻ récurrent',
    tutS1Title:'Ouvrez MoneyFlow dans Safari',tutS1Desc:'Assurez-vous d\'utiliser Safari. Chrome et autres navigateurs ne supportent pas l\'installation comme app sur iPhone.',
    tutS2Title:'Appuyez sur le bouton Partager',tutS2Desc:'En bas au centre, trouvez l\'icône avec une flèche vers le haut. Appuyez dessus.',
    tutS3Title:'Faites défiler et appuyez sur "Sur l\'écran d\'accueil"',tutS3Desc:'Dans le menu qui apparaît, faites défiler pour trouver cette option avec l\'icône "+". Appuyez dessus.',
    tutS4Title:'Confirmez avec "Ajouter"',tutS4Desc:'Un aperçu apparaîtra. Appuyez sur "Ajouter" en haut à droite pour terminer l\'installation.',
    tutSafariTip:'Sur iOS, les apps ajoutées via Safari fonctionnent en plein écran sans la barre du navigateur.',
    tutC1Title:'Ouvrez MoneyFlow dans Chrome',tutC1Desc:'Sur Android, utilisez Chrome. Sur iPhone, Safari est préférable, mais Chrome fonctionne aussi.',
    tutC2Title:'Appuyez sur les trois points en haut à droite',tutC2Desc:'Le menu Chrome s\'ouvre en appuyant sur "⋮" en haut à droite.',
    tutC3Title:'Sélectionnez "Ajouter à l\'écran d\'accueil"',tutC3Desc:'Cherchez "Ajouter à l\'écran d\'accueil" ou "Installer l\'app".',
    tutC4Title:'Appuyez sur "Ajouter" pour confirmer',tutC4Desc:'Une popup de confirmation apparaîtra. Appuyez sur "Ajouter" pour terminer.',
    tutChromeTip:'Sur Android avec Chrome, l\'app est installée comme PWA avec sa propre icône.',
    tapHere:'APPUYEZ ICI',svgMessages:'Messages',svgAddHome:'Sur l\'écran d\'accueil',svgCancel:'Annuler',svgAddToHome:'Ajouter à l\'accueil',svgAdd:'Ajouter',
    svgNewTab:'🔖  Nouvel onglet',svgBookmarks:'⭐  Favoris',svgAddHome2:'📲  Ajouter à l\'accueil',svgPrint:'🖨️  Imprimer',
  },
  de: {
    months:['Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'],
    cats:{Groceries:'Lebensmittel',Transport:'Transport',Home:'Zuhause',Fun:'Freizeit',Other:'Sonstiges'},
    catKeys:['Groceries','Transport','Home','Fun','Other'],
    used:'GENUTZT',spent:'Ausgegeben',remaining:'Verbleibend',
    projection:'Prognose Monatsende',catChart:'Ausgaben nach Kategorie',lastExpenses:'Letzte Ausgaben',
    noExpenses:'Noch keine Ausgaben',noData:'Keine Daten',addTitle:['Neue ','Ausgabe'],
    shoppingList:'Einkaufsliste',noShopping:'Keine Artikel in der Liste',
    shopDescPlaceholder:'z.B. Neue Schuhe…',addItem:'Artikel hinzufügen',
    amount:'Betrag',category:'Kategorie',description:'Beschreibung',descPlaceholder:'z.B. Geburtstagsgeschenk…',
    recurring:'Wiederkehrende Ausgabe',recurringSub:'Wiederholt sich jeden Monat',addBtn:'Ausgabe hinzufügen',
    historyTitle:['Verla','uf'],allCats:'Alle Kategorien',noExpensesHist:'Keine Ausgaben',
    statsTitle:['Statis','tiken'],catDist:'Kategorieverteilung',monthlyTrend:'Monatlicher Verlauf',insufficientData:'Unzureichende Daten',
    settingsTitle:['Einstel','lungen'],language:'Sprache',
    monthlyBudget:'Monatsbudget',budgetSaved:'Budget gespeichert',saveBudget:'Speichern',
    warnThreshold:'Orange Warnschwelle',warnSub:'Warnung wenn Sie diesen % des Budgets überschreiten',
    recurringExpenses:'Wiederkehrende Ausgaben',noRecurring:'Keine wiederkehrenden Ausgaben',
    tutorialTitle:'📲 Zum Startbildschirm hinzufügen',deleteSub:'Alle Ausgaben und Budgets löschen',deleteAll:'Alles löschen',
    navHome:'Start',navHist:'Verlauf',navStats:'Stats',navSet:'Einst.',
    editExpense:'Ausgabe bearbeiten',editAmount:'Betrag',editDesc:'Beschreibung',deleteBtn:'Löschen',saveBtn:'Speichern',
    chipOk:'Alles im Rahmen',chipWarn:'Sie haben {pct}% des Budgets verwendet',chipDanger:'Budget fast aufgebraucht!',chipEmpty:'Budget aufgebraucht',
    confirmDeleteExp:'Diese Ausgabe löschen?',confirmDeleteAll:'ALLE Daten löschen? Diese Aktion ist unwiderruflich.',
    noExportData:'Keine Ausgaben zum Exportieren',csvHeaders:'Datum,Kategorie,Betrag,Beschreibung,Wiederkehrend',csvYes:'Ja',csvNo:'Nein',recBadge:'↻ wiederkehrend',
    tutS1Title:'Öffne MoneyFlow in Safari',tutS1Desc:'Stelle sicher, dass du Safari verwendest. Chrome und andere Browser unterstützen keine App-Installation auf dem iPhone.',
    tutS2Title:'Tippe auf den Teilen-Button',tutS2Desc:'Unten in der Mitte findest du das Symbol mit einem Pfeil nach oben. Tippe darauf.',
    tutS3Title:'Scrolle zu "Zum Home-Bildschirm"',tutS3Desc:'Scrolle im Menü nach unten, um diese Option mit dem "+" Symbol zu finden.',
    tutS4Title:'Bestätige mit "Hinzufügen"',tutS4Desc:'Eine Vorschau erscheint. Tippe oben rechts auf "Hinzufügen".',
    tutSafariTip:'Auf iOS laufen Apps, die über Safari hinzugefügt wurden, vollbildschirmig ohne Browserleiste.',
    tutC1Title:'Öffne MoneyFlow in Chrome',tutC1Desc:'Auf Android verwende Chrome. Auf iPhone ist Safari bevorzugt, aber Chrome funktioniert auch.',
    tutC2Title:'Tippe auf die drei Punkte oben rechts',tutC2Desc:'Das Chrome-Menü öffnet sich durch Tippen auf "⋮" oben rechts.',
    tutC3Title:'Wähle "Zum Startbildschirm hinzufügen"',tutC3Desc:'Suche nach "Zum Startbildschirm" oder "App installieren".',
    tutC4Title:'Tippe auf "Hinzufügen" zum Bestätigen',tutC4Desc:'Ein Bestätigungs-Popup erscheint. Tippe auf "Hinzufügen".',
    tutChromeTip:'Auf Android mit Chrome wird die App als PWA mit eigenem Symbol installiert.',
    tapHere:'HIER TIPPEN',svgMessages:'Nachrichten',svgAddHome:'Zum Startbildschirm',svgCancel:'Abbrechen',svgAddToHome:'Zum Start hinzufügen',svgAdd:'Hinzufügen',
    svgNewTab:'🔖  Neuer Tab',svgBookmarks:'⭐  Lesezeichen',svgAddHome2:'📲  Zum Start',svgPrint:'🖨️  Drucken',
  },
  pt: {
    months:['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
    cats:{Groceries:'Compras',Transport:'Transporte',Home:'Casa',Fun:'Lazer',Other:'Outro'},
    catKeys:['Groceries','Transport','Home','Fun','Other'],
    used:'USADO',spent:'Gasto',remaining:'Restante',
    projection:'Projeção fim do mês',catChart:'Gastos por categoria',lastExpenses:'Últimos gastos',
    noExpenses:'Nenhum gasto ainda',noData:'Sem dados',addTitle:['Novo ','Gasto'],
    shoppingList:'Lista de compras',noShopping:'Nenhum item na lista',
    shopDescPlaceholder:'Ex. Sapatos novos…',addItem:'Adicionar item',
    amount:'Valor',category:'Categoria',description:'Descrição',descPlaceholder:'Ex. Presente aniversário…',
    recurring:'Gasto recorrente',recurringSub:'Repete-se todo mês',addBtn:'Adicionar Gasto',
    historyTitle:['Histó','rico'],allCats:'Todas as categorias',noExpensesHist:'Sem gastos',
    statsTitle:['Estatís','ticas'],catDist:'Distribuição por categoria',monthlyTrend:'Tendência mensal',insufficientData:'Dados insuficientes',
    settingsTitle:['Configu','rações'],language:'Idioma',
    monthlyBudget:'Orçamento mensal',budgetSaved:'Orçamento salvo',saveBudget:'Salvar',
    warnThreshold:'Limite de aviso laranja',warnSub:'Aviso quando ultrapassar esta % do orçamento',
    recurringExpenses:'Gastos recorrentes',noRecurring:'Nenhum gasto recorrente',
    tutorialTitle:'📲 Adicionar à tela inicial',deleteSub:'Excluir todos os gastos e orçamentos',deleteAll:'Excluir tudo',
    navHome:'Início',navHist:'Histórico',navStats:'Stats',navSet:'Config.',
    editExpense:'Editar gasto',editAmount:'Valor',editDesc:'Descrição',deleteBtn:'Excluir',saveBtn:'Salvar',
    chipOk:'Tudo sob controle',chipWarn:'Você usou {pct}% do orçamento',chipDanger:'Orçamento quase esgotado!',chipEmpty:'Orçamento esgotado',
    confirmDeleteExp:'Excluir este gasto?',confirmDeleteAll:'Excluir TODOS os dados? Esta ação é irreversível.',
    noExportData:'Nenhum gasto para exportar',csvHeaders:'Data,Categoria,Valor,Descrição,Recorrente',csvYes:'Sim',csvNo:'Não',recBadge:'↻ recorrente',
    tutS1Title:'Abra MoneyFlow no Safari',tutS1Desc:'Certifique-se de usar o Safari. O Chrome e outros navegadores não suportam instalação como app no iPhone.',
    tutS2Title:'Toque no botão Compartilhar',tutS2Desc:'Na parte inferior central você encontrará o ícone com uma seta para cima. Toque para abrir o menu.',
    tutS3Title:'Role e toque em "Adicionar à tela inicial"',tutS3Desc:'No menu que aparece, role as opções para encontrar este item com o ícone "+". Toque nele.',
    tutS4Title:'Confirme com "Adicionar"',tutS4Desc:'Uma prévia aparecerá com o nome do app. Toque em "Adicionar" no canto superior direito.',
    tutSafariTip:'No iOS, apps adicionados via Safari funcionam em tela cheia sem a barra do navegador.',
    tutC1Title:'Abra MoneyFlow no Chrome',tutC1Desc:'No Android, use o Chrome. No iPhone, o Safari é preferido, mas o Chrome também funciona.',
    tutC2Title:'Toque nos três pontos no canto superior direito',tutC2Desc:'O menu do Chrome se abre tocando em "⋮" no canto superior direito.',
    tutC3Title:'Selecione "Adicionar à tela inicial"',tutC3Desc:'Procure por "Adicionar à tela inicial" ou "Instalar app".',
    tutC4Title:'Toque em "Adicionar" para confirmar',tutC4Desc:'Um popup de confirmação aparecerá. Toque em "Adicionar".',
    tutChromeTip:'No Android com Chrome, o app é instalado como PWA com seu próprio ícone.',
    tapHere:'TOQUE AQUI',svgMessages:'Mensagens',svgAddHome:'Adicionar à tela inicial',svgCancel:'Cancelar',svgAddToHome:'Adicionar ao início',svgAdd:'Adicionar',
    svgNewTab:'🔖  Nova aba',svgBookmarks:'⭐  Favoritos',svgAddHome2:'📲  Adicionar ao início',svgPrint:'🖨️  Imprimir',
  }
};


/* Chiavi aggiunte: sezione "Aspetto", testi home non ancora tradotti */
const EXTRA = {
  en:{totalExp:'Total expenses',yourMoney:'Your money',viewAll:'View all',setBudget:'Set your monthly budget',projectionShort:'End of month',appearance:'Appearance',themeLight:'Light',themeDark:'Dark',themeAuto:'Auto',editLbl:'Edit'},
  it:{totalExp:'Spese totali',yourMoney:'I tuoi soldi',viewAll:'Vedi tutto',setBudget:'Imposta il budget mensile',projectionShort:'Fine mese',appearance:'Aspetto',themeLight:'Chiaro',themeDark:'Scuro',themeAuto:'Auto',editLbl:'Modifica'},
  es:{totalExp:'Gastos totales',yourMoney:'Tu dinero',viewAll:'Ver todo',setBudget:'Define tu presupuesto mensual',projectionShort:'Fin de mes',appearance:'Apariencia',themeLight:'Claro',themeDark:'Oscuro',themeAuto:'Auto',editLbl:'Editar'},
  fr:{totalExp:'Dépenses totales',yourMoney:'Votre argent',viewAll:'Tout voir',setBudget:'Définissez votre budget mensuel',projectionShort:'Fin de mois',appearance:'Apparence',themeLight:'Clair',themeDark:'Sombre',themeAuto:'Auto',editLbl:'Modifier'},
  de:{totalExp:'Gesamtausgaben',yourMoney:'Dein Geld',viewAll:'Alle anzeigen',setBudget:'Lege dein Monatsbudget fest',projectionShort:'Monatsende',appearance:'Darstellung',themeLight:'Hell',themeDark:'Dunkel',themeAuto:'Auto',editLbl:'Bearbeiten'},
  pt:{totalExp:'Gastos totais',yourMoney:'Seu dinheiro',viewAll:'Ver tudo',setBudget:'Defina seu orçamento mensal',projectionShort:'Fim do mês',appearance:'Aparência',themeLight:'Claro',themeDark:'Escuro',themeAuto:'Auto',editLbl:'Editar'},
};
Object.keys(EXTRA).forEach(l=>Object.assign(TRANSLATIONS[l],EXTRA[l]));
Object.entries({
  en:{accent:'Accent color',accentHint:'Pick the main color of the app',installTitle:'Install the app',installSub:'Add MoneyFlow to your home screen and use it like a native app, even offline',installBtn:'Install'},
  it:{accent:'Colore principale',accentHint:"Scegli il colore principale dell'app",installTitle:"Installa l'app",installSub:"Aggiungi MoneyFlow alla schermata Home e usala come un'app nativa, anche offline",installBtn:'Installa'},
  es:{accent:'Color principal',accentHint:'Elige el color principal de la app',installTitle:'Instalar la app',installSub:'Añade MoneyFlow a tu pantalla de inicio y úsala como una app nativa, incluso sin conexión',installBtn:'Instalar'},
  fr:{accent:'Couleur principale',accentHint:"Choisissez la couleur principale de l'app",installTitle:"Installer l'app",installSub:"Ajoutez MoneyFlow à l'écran d'accueil et utilisez-la comme une app native, même hors ligne",installBtn:'Installer'},
  de:{accent:'Hauptfarbe',accentHint:'Wähle die Hauptfarbe der App',installTitle:'App installieren',installSub:'Füge MoneyFlow zum Startbildschirm hinzu und nutze es wie eine native App – auch offline',installBtn:'Installieren'},
  pt:{accent:'Cor principal',accentHint:'Escolha a cor principal do app',installTitle:'Instalar o app',installSub:'Adicione o MoneyFlow à tela inicial e use como um app nativo, mesmo offline',installBtn:'Instalar'},
}).forEach(([l,o])=>Object.assign(TRANSLATIONS[l],o));

/* Entrate / uscite e pagina Movimenti (storico + statistiche unificati) */
const NEWT = {
  en:{
    income:'Income', balance:'Balance', expenses:'Expenses', typeOut:'Expense', typeIn:'Income',
    addTitleIn:['New ','Income'], addBtnIn:'Add Income', recurringIn:'Recurring income',
    navAct:'Activity', activityTitle:['Activ','ity'],
    lastTx:'Latest transactions', noTx:'No transactions yet', noTxHist:'No transactions', txTitle:'Transactions',
    incVsExp:'Income vs expenses', catOut:'Expenses by category', catIn:'Income by category',
    totalIn:'Total income', totalOut:'Total expenses',
    recurringTx:'Recurring transactions', noRecurringTx:'No recurring transactions',
    editTx:'Edit transaction', confirmDeleteTx:'Delete this transaction?',
    deleteSubTx:'Delete all transactions and budgets from every month',
    noExportTx:'No transactions to export', csvHeadersTx:'Date,Category,Amount,Description,Recurring,Type',
    csvIn:'Income', csvOut:'Expense',
    catsIn:{Salary:'Salary',Extra:'Side income',Gift:'Gift',Refund:'Refund',OtherIn:'Other'},
  },
  it:{
    income:'Entrate', balance:'Saldo', expenses:'Uscite', typeOut:'Uscita', typeIn:'Entrata',
    addTitleIn:['Nuova ','Entrata'], addBtnIn:'Aggiungi Entrata', recurringIn:'Entrata ricorrente',
    navAct:'Movimenti', activityTitle:['Movi','menti'],
    lastTx:'Ultimi movimenti', noTx:'Nessun movimento ancora', noTxHist:'Nessun movimento', txTitle:'Movimenti',
    incVsExp:'Entrate e uscite', catOut:'Uscite per categoria', catIn:'Entrate per categoria',
    totalIn:'Entrate totali', totalOut:'Uscite totali',
    recurringTx:'Movimenti ricorrenti', noRecurringTx:'Nessun movimento ricorrente',
    editTx:'Modifica movimento', confirmDeleteTx:'Eliminare questo movimento?',
    deleteSubTx:'Cancella movimenti e budget di tutti i mesi',
    noExportTx:'Nessun movimento da esportare', csvHeadersTx:'Data,Categoria,Importo,Descrizione,Ricorrente,Tipo',
    csvIn:'Entrata', csvOut:'Uscita',
    catsIn:{Salary:'Stipendio',Extra:'Extra',Gift:'Regalo',Refund:'Rimborso',OtherIn:'Altro'},
  },
  es:{
    income:'Ingresos', balance:'Saldo', expenses:'Gastos', typeOut:'Gasto', typeIn:'Ingreso',
    addTitleIn:['Nuevo ','Ingreso'], addBtnIn:'Añadir Ingreso', recurringIn:'Ingreso recurrente',
    navAct:'Movimientos', activityTitle:['Movi','mientos'],
    lastTx:'Últimos movimientos', noTx:'Sin movimientos aún', noTxHist:'Sin movimientos', txTitle:'Movimientos',
    incVsExp:'Ingresos y gastos', catOut:'Gastos por categoría', catIn:'Ingresos por categoría',
    totalIn:'Ingresos totales', totalOut:'Gastos totales',
    recurringTx:'Movimientos recurrentes', noRecurringTx:'Sin movimientos recurrentes',
    editTx:'Editar movimiento', confirmDeleteTx:'¿Eliminar este movimiento?',
    deleteSubTx:'Eliminar todos los movimientos y presupuestos',
    noExportTx:'Sin movimientos para exportar', csvHeadersTx:'Fecha,Categoría,Importe,Descripción,Recurrente,Tipo',
    csvIn:'Ingreso', csvOut:'Gasto',
    catsIn:{Salary:'Salario',Extra:'Extra',Gift:'Regalo',Refund:'Reembolso',OtherIn:'Otro'},
  },
  fr:{
    income:'Revenus', balance:'Solde', expenses:'Dépenses', typeOut:'Dépense', typeIn:'Revenu',
    addTitleIn:['Nouveau ','Revenu'], addBtnIn:'Ajouter un revenu', recurringIn:'Revenu récurrent',
    navAct:'Activité', activityTitle:['Activ','ité'],
    lastTx:'Dernières transactions', noTx:'Aucune transaction', noTxHist:'Aucune transaction', txTitle:'Transactions',
    incVsExp:'Revenus et dépenses', catOut:'Dépenses par catégorie', catIn:'Revenus par catégorie',
    totalIn:'Revenus totaux', totalOut:'Dépenses totales',
    recurringTx:'Transactions récurrentes', noRecurringTx:'Aucune transaction récurrente',
    editTx:'Modifier la transaction', confirmDeleteTx:'Supprimer cette transaction ?',
    deleteSubTx:'Supprimer toutes les transactions et budgets',
    noExportTx:'Aucune transaction à exporter', csvHeadersTx:'Date,Catégorie,Montant,Description,Récurrent,Type',
    csvIn:'Revenu', csvOut:'Dépense',
    catsIn:{Salary:'Salaire',Extra:'Extra',Gift:'Cadeau',Refund:'Remboursement',OtherIn:'Autre'},
  },
  de:{
    income:'Einnahmen', balance:'Saldo', expenses:'Ausgaben', typeOut:'Ausgabe', typeIn:'Einnahme',
    addTitleIn:['Neue ','Einnahme'], addBtnIn:'Einnahme hinzufügen', recurringIn:'Wiederkehrende Einnahme',
    navAct:'Aktivität', activityTitle:['Aktivi','tät'],
    lastTx:'Letzte Buchungen', noTx:'Noch keine Buchungen', noTxHist:'Keine Buchungen', txTitle:'Buchungen',
    incVsExp:'Einnahmen & Ausgaben', catOut:'Ausgaben nach Kategorie', catIn:'Einnahmen nach Kategorie',
    totalIn:'Gesamteinnahmen', totalOut:'Gesamtausgaben',
    recurringTx:'Wiederkehrende Buchungen', noRecurringTx:'Keine wiederkehrenden Buchungen',
    editTx:'Buchung bearbeiten', confirmDeleteTx:'Diese Buchung löschen?',
    deleteSubTx:'Alle Buchungen und Budgets löschen',
    noExportTx:'Keine Buchungen zum Exportieren', csvHeadersTx:'Datum,Kategorie,Betrag,Beschreibung,Wiederkehrend,Typ',
    csvIn:'Einnahme', csvOut:'Ausgabe',
    catsIn:{Salary:'Gehalt',Extra:'Nebenverdienst',Gift:'Geschenk',Refund:'Erstattung',OtherIn:'Sonstiges'},
  },
  pt:{
    income:'Receitas', balance:'Saldo', expenses:'Despesas', typeOut:'Despesa', typeIn:'Receita',
    addTitleIn:['Nova ','Receita'], addBtnIn:'Adicionar Receita', recurringIn:'Receita recorrente',
    navAct:'Atividade', activityTitle:['Ativi','dade'],
    lastTx:'Últimas transações', noTx:'Nenhuma transação ainda', noTxHist:'Nenhuma transação', txTitle:'Transações',
    incVsExp:'Receitas e despesas', catOut:'Despesas por categoria', catIn:'Receitas por categoria',
    totalIn:'Receitas totais', totalOut:'Despesas totais',
    recurringTx:'Transações recorrentes', noRecurringTx:'Nenhuma transação recorrente',
    editTx:'Editar transação', confirmDeleteTx:'Excluir esta transação?',
    deleteSubTx:'Excluir todas as transações e orçamentos',
    noExportTx:'Nenhuma transação para exportar', csvHeadersTx:'Data,Categoria,Valor,Descrição,Recorrente,Tipo',
    csvIn:'Receita', csvOut:'Despesa',
    catsIn:{Salary:'Salário',Extra:'Extra',Gift:'Presente',Refund:'Reembolso',OtherIn:'Outro'},
  },
};
Object.entries(NEWT).forEach(([l,o])=>{
  const {catsIn,...rest}=o;
  Object.assign(TRANSLATIONS[l],rest);
  Object.assign(TRANSLATIONS[l].cats,catsIn);
});


/* ══════════════════════════════════════
   STORAGE HELPERS
══════════════════════════════════════ */
function lsGet(k){try{return localStorage.getItem(k)}catch(e){return null}}
function lsSet(k,v){try{localStorage.setItem(k,v)}catch(e){}}
function readJSON(k,fb){try{const v=JSON.parse(localStorage.getItem(k));return v==null?fb:v}catch(e){return fb}}
const $=id=>document.getElementById(id);
function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}

/* ══════════════════════════════════════
   STATE
══════════════════════════════════════ */
let currentLang = TRANSLATIONS[lsGet('lang')] ? lsGet('lang') : 'en';
let T = TRANSLATIONS[currentLang];
let themePref = ['light','dark','auto'].includes(lsGet('theme')) ? lsGet('theme') : 'auto';

const catIcons={Groceries:'🛒',Transport:'🚌',Home:'🏠',Fun:'🎮',Other:'📦',Salary:'💼',Extra:'💻',Gift:'🎁',Refund:'↩️',OtherIn:'💰'};
const catClass={Groceries:'cat-food',Transport:'cat-transport',Home:'cat-house',Fun:'cat-fun',Other:'cat-other',Salary:'cat-salary',Extra:'cat-extra',Gift:'cat-gift',Refund:'cat-refund',OtherIn:'cat-otherin'};
const catColors={Groceries:'#F97316',Transport:'#3B82F6',Home:'#22C55E',Fun:'#8B5CF6',Other:'#EC4899',Salary:'#16A34A',Extra:'#0D9488',Gift:'#CA8A04',Refund:'#0891B2',OtherIn:'#65A30D'};
const EXPENSE_KEYS=['Groceries','Transport','Home','Fun','Other'];
const INCOME_KEYS=['Salary','Extra','Gift','Refund','OtherIn'];
// ogni movimento ha type:'in' (entrata) o 'out' (uscita); i vecchi dati senza type sono uscite
const isIn=x=>!!x&&x.type==='in';
const needsDesc=c=>c==='Other'||c==='OtherIn';   // categorie "Altro": chiedono una descrizione
const sumAmt=l=>l.reduce((a,x)=>a+x.amount,0);
function fmtSigned(n){n=Math.round((+n||0)*100)/100;return (n<0?'−':n>0?'+':'')+fmtMoney(Math.abs(n))}

function curKey(){const d=new Date();return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')}
function migrateMonthKeys(){
  // Converte le vecchie chiavi tipo "2026-7" nel nuovo formato "2026-07",
  // così l'ordinamento alfabetico dei mesi torna cronologicamente corretto.
  const oldKeyRe=/^(e_|b_|rec_applied_)(\d{4})-(\d{1,2})$/;
  const toMove=[];
  for(let i=0;i<localStorage.length;i++){
    const k=localStorage.key(i);
    const m=k&&k.match(oldKeyRe);
    if(m&&m[3].length===1) toMove.push({oldKey:k,prefix:m[1],year:m[2],month:m[3]});
  }
  toMove.forEach(({oldKey,prefix,year,month})=>{
    const newKey=prefix+year+'-'+month.padStart(2,'0');
    if(localStorage.getItem(newKey)===null){
      localStorage.setItem(newKey,localStorage.getItem(oldKey));
    }else if(prefix==='e_'){
      // unisce le spese se esiste già una chiave nel nuovo formato
      const merged=readJSON(newKey,[]).concat(readJSON(oldKey,[]));
      localStorage.setItem(newKey,JSON.stringify(merged));
    }
    localStorage.removeItem(oldKey);
  });
}
let typeFilter='all';   // pagina Movimenti: 'all' | 'in' | 'out'
let catFilter='all';    // filtro categoria (si imposta toccando una riga del grafico)
let addType='out';      // pagina Nuovo: 'out' | 'in'
let selectedCat='Groceries';
let editingDate=null;
let viewingKey=curKey();
let selectedShopCat='Groceries';

/* ══════════════════════════════════════
   THEME (chiaro / scuro / automatico)
══════════════════════════════════════ */
const darkMQ=window.matchMedia?window.matchMedia('(prefers-color-scheme: dark)'):null;
function resolveTheme(pref){return pref==='dark'||(pref==='auto'&&darkMQ&&darkMQ.matches)?'dark':'light'}
function applyTheme(){
  const t=resolveTheme(themePref);
  document.documentElement.setAttribute('data-theme',t);
  applyAccent();
}
function renderThemeButtons(){
  document.querySelectorAll('.theme-btn').forEach(b=>{
    const on=b.dataset.theme===themePref;
    b.classList.toggle('active',on);
    b.setAttribute('aria-pressed',on?'true':'false');
  });
}
function setTheme(pref){
  if(!['light','dark','auto'].includes(pref))pref='auto';
  themePref=pref;lsSet('theme',pref);
  applyTheme();renderThemeButtons();haptic(8);
}
if(darkMQ){
  const onChange=()=>{if(themePref==='auto')applyTheme()};
  if(darkMQ.addEventListener)darkMQ.addEventListener('change',onChange);
  else if(darkMQ.addListener)darkMQ.addListener(onChange);
}


/* ══════════════════════════════════════
   ACCENT COLOR (colore principale)
══════════════════════════════════════ */
const DEFAULT_ACCENT='#8B5CF6';
const ACCENT_PRESETS=['#8B5CF6','#2563EB','#0D9488','#16A34A','#EA580C','#DB2777','#DC2626'];
let accent=/^#[0-9a-f]{6}$/i.test(lsGet('accent')||'')?lsGet('accent').toUpperCase():DEFAULT_ACCENT;

const hex2rgb=h=>[1,3,5].map(i=>parseInt(h.slice(i,i+2),16));
const rgb2hex=a=>'#'+a.map(v=>Math.round(Math.max(0,Math.min(255,v))).toString(16).padStart(2,'0')).join('');
const mix=(a,b,t)=>{const x=hex2rgb(a),y=hex2rgb(b);return rgb2hex(x.map((v,i)=>v+(y[i]-v)*t))}; // t=0→a, t=1→b
function relLum(hex){return hex2rgb(hex).map(v=>{v/=255;return v<=.03928?v/12.92:Math.pow((v+.055)/1.055,2.4)}).reduce((s,v,i)=>s+v*[.2126,.7152,.0722][i],0)}
function contrastRatio(a,b){const x=relLum(a),y=relLum(b);return (Math.max(x,y)+.05)/(Math.min(x,y)+.05)}
function rgb2hsl([r,g,b]){r/=255;g/=255;b/=255;const M=Math.max(r,g,b),m=Math.min(r,g,b),l=(M+m)/2;let h=0,s=0;
  if(M!==m){const d=M-m;s=l>.5?d/(2-M-m):d/(M+m);h=M===r?(g-b)/d+(g<b?6:0):M===g?(b-r)/d+2:(r-g)/d+4;h/=6}return[h,s,l]}
function hsl2hex([h,s,l]){const f=n=>{const k=(n+h*12)%12,a=s*Math.min(l,1-l);return l-a*Math.max(-1,Math.min(k-3,9-k,1))};return rgb2hex([f(0)*255,f(8)*255,f(4)*255])}
// porta la luminanza del colore in una fascia in cui il bianco sopra resta leggibile (≥3:1)
// e il colore resta visibile sulle superfici scure: vale per qualsiasi colore scelto, anche giallo o nero
function fitAccent(hex){
  const [h,s0,l0]=rgb2hsl(hex2rgb(hex)),s=Math.min(1,Math.max(s0,.35)),LO=.14,HI=.27;
  const lum=l=>relLum(hsl2hex([h,s,l]));
  let L=lum(l0);if(L>=LO&&L<=HI&&s0>=.35)return hex.toUpperCase();
  const target=L>HI?HI:L<LO?LO:L;let a=.05,b=.95;
  for(let i=0;i<24;i++){const m=(a+b)/2;if(lum(m)<target)a=m;else b=m}
  return hsl2hex([h,s,(a+b)/2]).toUpperCase();
}
// produce le variabili CSS per un colore e una modalità (light|dark)
function accentVars(hex,mode){
  const base=fitAccent(hex),dark=mode==='dark',rgb=hex2rgb(base);
  const card=dark?'#1D1934':'#FFFFFF';
  const pl=dark?mix(base,'#1D1934',.72):mix(base,'#FFFFFF',.88);
  // testo accentato sopra la tinta chiara/scura (≥4.5:1)
  let pd=base,t=0;const need=c=>contrastRatio(c,pl)<4.5;
  if(dark){t=.5;pd=mix(base,'#FFFFFF',t);while(need(pd)&&t<1){t+=.05;pd=mix(base,'#FFFFFF',t)}}
  else{pd=base;while(need(pd)&&t<1){t+=.05;pd=mix(base,'#000000',t)}}
  // testo accentato sulle pillole bianche del banner (sempre sfondo bianco)
  let ink=base;t=0;while(contrastRatio(ink,'#FFFFFF')<4.5&&t<1){t+=.05;ink=mix(base,'#000000',t)}
  // icone/testo accentati sopra l'insight bar (sempre scura)
  const insBg=dark?'#2B2650':'#15121F';let ond=mix(base,'#FFFFFF',.5);t=.5;while(contrastRatio(ond,insBg)<4.5&&t<1){t+=.05;ond=mix(base,'#FFFFFF',t)}
  const top=dark
    ?`radial-gradient(120% 90% at 85% -10%,rgba(255,255,255,.16) 0%,transparent 55%),radial-gradient(90% 70% at 0% 100%,rgba(${hex2rgb(mix(base,'#000000',.55)).join(',')},.6) 0%,transparent 60%),linear-gradient(160deg,${mix(base,'#000000',.2)} 0%,${mix(base,'#000000',.32)} 55%,${mix(base,'#000000',.45)} 100%)`
    :`radial-gradient(120% 90% at 85% -10%,rgba(255,255,255,.28) 0%,transparent 55%),radial-gradient(90% 70% at 0% 100%,rgba(${hex2rgb(mix(base,'#000000',.25)).join(',')},.55) 0%,transparent 60%),linear-gradient(160deg,${mix(base,'#FFFFFF',.45)} 0%,${base} 55%,${mix(base,'#000000',.1)} 100%)`;
  return{vars:{'--p':base,'--p-hi':mix(base,'#FFFFFF',.25),'--p-lo':mix(base,'#000000',.18),'--p-rgb':rgb.join(','),
    '--p-ink':ink,'--p-d':pd,'--p-l':pl,'--p-on-dark':ond,'--top-bg':top},themeColor:dark?mix(base,'#000000',.32):base,card};
}
function applyAccent(){
  const root=document.documentElement,mode=resolveTheme(themePref),def=accent===DEFAULT_ACCENT;
  const keys=['--p','--p-hi','--p-lo','--p-rgb','--p-ink','--p-d','--p-l','--p-on-dark','--top-bg'];
  const m=document.querySelector('meta[name="theme-color"]');
  if(def){keys.forEach(k=>root.style.removeProperty(k));if(m)m.setAttribute('content',mode==='dark'?'#4A27A8':'#8B5CF6');return}
  const a=accentVars(accent,mode);
  keys.forEach(k=>root.style.setProperty(k,a.vars[k]));
  if(m)m.setAttribute('content',a.themeColor);
}
function setAccent(hex){
  if(!/^#[0-9a-f]{6}$/i.test(hex))return;
  accent=hex.toUpperCase();lsSet('accent',accent);
  // copia pre-calcolata per lo snippet nel <head> (applica il colore prima del primo paint)
  if(accent===DEFAULT_ACCENT)lsSet('accentVars','');
  else{const L=accentVars(accent,'light'),D=accentVars(accent,'dark');
    lsSet('accentVars',JSON.stringify({light:{v:L.vars,tc:L.themeColor},dark:{v:D.vars,tc:D.themeColor}}));}
  applyAccent();renderAccentUI();haptic(8);
}
function renderAccentUI(){
  const isPreset=ACCENT_PRESETS.includes(accent);
  document.querySelectorAll('.swatch[data-color]').forEach(b=>{
    const on=b.dataset.color===accent;b.classList.toggle('active',on);b.setAttribute('aria-pressed',on?'true':'false');
  });
  const cu=$('swCustom'),ci=$('accentCustom');
  if(cu){cu.classList.toggle('active',!isPreset);cu.style.setProperty('--sw',accent);}
  if(ci&&!isPreset)ci.value=accent.toLowerCase();
}

/* ══════════════════════════════════════
   LANGUAGE
══════════════════════════════════════ */
function setLang(lang, el){
  if(!TRANSLATIONS[lang])return;
  currentLang=lang;
  T=TRANSLATIONS[lang];
  lsSet('lang',lang);
  document.querySelectorAll('.lang-btn').forEach(x=>x.classList.remove('active'));
  if(el) el.classList.add('active');
  applyLang();
  load();
  renderSettings();
}

function applyLang(){
  const s=(id,txt)=>{const el=$(id);if(el)el.textContent=txt};
  const h=(id,html)=>{const el=$(id);if(el)el.innerHTML=html};
  document.documentElement.lang=currentLang;
  document.querySelectorAll('.lang-btn').forEach(x=>x.classList.toggle('active',x.dataset.lang===currentLang));
  // home
  s('lbl-used',T.used); s('lbl-spent',T.spent); s('lbl-remaining',T.remaining);
  s('lbl-income',T.income); s('lbl-balance',T.balance);
  s('lbl-your-money',T.yourMoney); s('lbl-budget',T.monthlyBudget);
  s('lbl-last-expenses',T.lastTx); s('lnk-view-all',T.viewAll);
  s('lbl-shopping-list',T.shoppingList); s('lbl-add-item',T.addItem);
  $('shopDesc').placeholder=T.shopDescPlaceholder;
  // add
  s('lbl-amount',T.amount); s('lbl-category',T.category); s('lbl-description',T.description);
  $('desc').placeholder=T.descPlaceholder;
  s('lbl-recurring-sub',T.recurringSub);
  s('lbl-type-out',T.typeOut); s('lbl-type-in',T.typeIn);
  applyAddType(); // titolo, bottone, ricorrenza e categorie in base a uscita/entrata
  // history / stats / settings titles
  h('lbl-activity-title',esc(T.activityTitle[0])+'<span>'+esc(T.activityTitle[1])+'</span>');
  s('lbl-monthly-trend',T.monthlyTrend); s('lbl-tx-title',T.txTitle);
  s('lbl-st-all',T.balance); s('lbl-st-in',T.income); s('lbl-st-out',T.expenses);
  s('lg-in',T.income); s('lg-out',T.expenses);
  h('lbl-settings-title',esc(T.settingsTitle[0])+'<span>'+esc(T.settingsTitle[1])+'</span>');
  s('lbl-language',T.language);
  s('lbl-appearance',T.appearance);s('lbl-accent',T.accent);s('accent-hint',T.accentHint);
  s('lbl-install-title',T.installTitle);s('lbl-install-sub',T.installSub);s('btn-install',T.installBtn);
  s('theme-lbl-light',T.themeLight); s('theme-lbl-dark',T.themeDark); s('theme-lbl-auto',T.themeAuto);
  s('lbl-monthly-budget',T.monthlyBudget); s('lbl-budget-saved',T.budgetSaved); s('btn-save-budget',T.saveBudget);
  s('lbl-warn-threshold',T.warnThreshold); s('lbl-warn-sub',T.warnSub);
  s('lbl-recurring-expenses',T.recurringTx);
  s('lbl-tutorial-title',T.tutorialTitle);
  s('lbl-delete-sub',T.deleteSubTx);
  h('btn-delete-all','<i class="fas fa-trash-can"></i> '+esc(T.deleteAll));
  // nav
  s('nav-lbl-home',T.navHome); s('nav-lbl-act',T.navAct);
  // sheet
  s('lbl-edit-expense',T.editTx); s('lbl-edit-amount',T.editAmount); s('lbl-edit-desc',T.editDesc);
  s('lbl-delete',T.deleteBtn); s('lbl-save',T.saveBtn);
  // tutorial
  ['s1','s2','s3','s4','c1','c2','c3','c4'].forEach(k=>{
    const K=k[0].toUpperCase()+k.slice(1);
    s('tut-'+k+'-title',T['tut'+K+'Title']); s('tut-'+k+'-desc',T['tut'+K+'Desc']);
  });
  s('tut-safari-tip',T.tutSafariTip); s('tut-chrome-tip',T.tutChromeTip);
}

/* ══════════════════════════════════════
   STORAGE
══════════════════════════════════════ */
function getExp(key){const v=readJSON('e_'+(key||curKey()),[]);return Array.isArray(v)?v:[]}
function saveExp(e,key){lsSet('e_'+(key||curKey()),JSON.stringify(e))}
function getBudget(key){return +lsGet('b_'+(key||curKey()))||0}
function getThreshold(){return +lsGet('warnThreshold')||70}
function fmtMoney(n){return '€\u00a0'+(+n||0).toFixed(2).replace('.',',')}
function fmtShort(n){return n>=1000?(n/1000).toFixed(1).replace('.',',')+'k':String(Math.round(n))}
function allKeys(){
  const keys=[];
  for(let i=0;i<localStorage.length;i++){const k=localStorage.key(i);if(k&&k.startsWith('e_'))keys.push(k.slice(2));}
  return keys.sort();
}
// Id univoco (timestamp): evita collisioni quando si aggiungono più spese nello stesso millisecondo
function uniqueDate(list){let d=Date.now();const used=new Set(list.map(x=>x.date));while(used.has(d))d++;return d}
function monthLabel(){const n=new Date();return T.months[n.getMonth()]+' '+n.getFullYear()}

/* ══════════════════════════════════════
   NAV
══════════════════════════════════════ */
function show(id,navId){
  document.querySelectorAll('.page').forEach(x=>x.classList.remove('active'));
  $(id).classList.add('active');
  document.querySelectorAll('.nav-item').forEach(x=>x.classList.remove('active'));
  if(navId)$(navId).classList.add('active');
  window.scrollTo(0,0);
  if(id==='activityPage'){buildMonthTabs();renderActivity();}
  if(id==='settingsPage')renderSettings();
}

function selectCat(el){
  document.querySelectorAll('.cat-btn').forEach(x=>x.classList.remove('selected'));
  el.classList.add('selected');selectedCat=el.dataset.cat;
  const wrap=$('descWrap');
  if(needsDesc(selectedCat)){wrap.classList.add('open');}
  else{wrap.classList.remove('open');$('desc').value='';}
}

function haptic(p){try{if(navigator.vibrate)navigator.vibrate(p||10)}catch(e){}}
function showConfirm(){
  haptic([10,30,10]);
  const ov=$('confirmOverlay'),bb=$('confirmBubble');
  ov.style.display='flex';bb.style.animation='none';void bb.offsetWidth;
  bb.style.animation='pop-confirm .4s cubic-bezier(.4,0,.2,1) forwards';
  setTimeout(()=>ov.style.display='none',900);
}

/* ══════════════════════════════════════
   HOME
══════════════════════════════════════ */
function load(){
  applyRecurring();
  const e=getExp(),b=getBudget(),t=sumAmt(e.filter(x=>!isIn(x))),inc=sumAmt(e.filter(isIn)),net=inc-t;
  const residuo=b-t,pct=b?Math.min(100,t/b*100):0,thr=getThreshold();
  const state=!b?'idle':residuo<=0?'empty':pct>=90?'danger':pct>=thr?'warn':'ok';

  $('homeMonth').textContent=monthLabel();
  $('perc').textContent=pct.toFixed(0)+'%';
  $('spent').textContent=fmtMoney(t);
  $('income').textContent=fmtMoney(inc);
  const bal=$('balance');bal.textContent=fmtSigned(net);bal.className='money-val '+(net<0?'neg':net>0?'pos':'');
  $('remaining').textContent=b?fmtMoney(residuo):'—';
  $('budgetVal').textContent=b?fmtMoney(b):'—';

  const bar=$('heroBar');
  bar.style.width=pct+'%';
  bar.style.background=state==='danger'||state==='empty'?'#F87171':state==='warn'?'#FBBF24':'#fff';

  // insight bar: stato del budget + proiezione di fine mese
  const ins=$('insight');
  ins.className='insight '+(state==='empty'?'danger':state);
  const icon={idle:'fa-wand-magic-sparkles',ok:'fa-circle-check',warn:'fa-triangle-exclamation',danger:'fa-circle-exclamation',empty:'fa-ban'}[state];
  $('insightIcon').className='fas '+icon;
  $('insightTitle').textContent={
    idle:T.setBudget,ok:T.chipOk,warn:T.chipWarn.replace('{pct}',pct.toFixed(0)),danger:T.chipDanger,empty:T.chipEmpty
  }[state];
  const now=new Date(),day=now.getDate(),dim=new Date(now.getFullYear(),now.getMonth()+1,0).getDate();
  const sub=$('insightSub');
  if(b&&t>0&&day>1){
    sub.style.display='block';
    sub.textContent=T.projection+': '+fmtMoney(t/day*dim);
  }else{sub.style.display='none';sub.textContent='';}

  renderShoppingList();
  const l3=$('last3'),last=e.slice().reverse().slice(0,3);
  l3.innerHTML=last.length?last.map(x=>txRow(x,false)).join(''):`<div class="empty">${esc(T.noTx)}</div>`;
}

/* ══════════════════════════════════════
   SHOPPING LIST
══════════════════════════════════════ */
function getShopping(){const v=readJSON('shopping',[]);return Array.isArray(v)?v:[]}
function saveShopping(list){lsSet('shopping',JSON.stringify(list))}

function selectShopCat(el){
  document.querySelectorAll('.shop-cat-btn').forEach(x=>x.classList.remove('selected'));
  el.classList.add('selected');selectedShopCat=el.dataset.cat;
}

function addShoppingItem(){
  const desc=$('shopDesc').value.trim();
  const price=parseFloat($('shopPrice').value);
  if(!desc||isNaN(price)||price<=0)return;
  const list=getShopping();
  list.push({id:uniqueDate(list),desc,amount:price,cat:selectedShopCat});
  saveShopping(list);
  $('shopDesc').value='';
  $('shopPrice').value='';
  haptic(10);
  renderShoppingList();
}

function renderShoppingList(){
  const list=getShopping(),container=$('shoppingList');
  if(!container)return;
  if(!list.length){container.innerHTML=`<div class="empty">${esc(T.noShopping)}</div>`;return;}
  container.innerHTML=list.map(item=>`
    <div class="shop-item" data-id="${item.id}">
      <div class="shop-checkbox" role="button" tabindex="0" aria-label="${esc(T.addBtn)}" onclick="toggleShoppingItem(${item.id})"><i class="fas fa-check"></i></div>
      <div class="shop-info"><div class="shop-desc">${esc(item.desc)}</div><div class="shop-sub">${catIcons[item.cat]||'📦'} ${esc(T.cats[item.cat]||item.cat)}</div></div>
      <div class="shop-price">${fmtMoney(item.amount)}</div>
      <div class="shop-delete-btn" role="button" tabindex="0" aria-label="${esc(T.deleteBtn)}" onclick="deleteShoppingItem(${item.id})"><i class="fas fa-xmark"></i></div>
    </div>`).join('');
}

function toggleShoppingItem(id){
  const list=getShopping(),idx=list.findIndex(x=>x.id===id);if(idx===-1)return;
  const item=list[idx];
  const e=getExp();
  e.push({amount:item.amount,cat:item.cat,date:uniqueDate(e),desc:item.desc,recurring:false,type:'out'});
  saveExp(e);
  list.splice(idx,1);saveShopping(list);
  showConfirm();
  load();refreshActivityIfVisible();
}

function deleteShoppingItem(id){
  saveShopping(getShopping().filter(x=>x.id!==id));haptic(10);renderShoppingList();
}

function txRow(x,editable){
  const d=new Date(x.date),inc=isIn(x);
  const ds=d.getDate().toString().padStart(2,'0')+'/'+(d.getMonth()+1).toString().padStart(2,'0');
  const sub=(x.desc?esc(x.desc)+' · ':'')+ds;
  const recBadge=x.recurring?`<span class="recurring-badge">${esc(T.recBadge)}</span>`:'';
  const editBtn=editable?`<div class="tx-edit-btn" role="button" tabindex="0" aria-label="${esc(T.editLbl)}" onclick="openSheet(${x.date})"><i class="fas fa-pencil"></i></div>`:'';
  return `<div class="tx-row" data-date="${x.date}">
    <div class="tx-icon ${catClass[x.cat]||'cat-other'}">${catIcons[x.cat]||'📦'}</div>
    <div class="tx-info"><div class="tx-cat">${esc(T.cats[x.cat]||x.cat)}${recBadge}</div><div class="tx-sub">${sub}</div></div>
    <div class="tx-amount${inc?' in':''}">${inc?'+':'−'}${fmtMoney(x.amount)}</div>${editBtn}
  </div>`;
}

/* ══════════════════════════════════════
   MOVIMENTI (storico + statistiche in un'unica pagina)
══════════════════════════════════════ */
function buildMonthTabs(){
  const keys=allKeys();
  if(!keys.includes(curKey()))keys.push(curKey());
  if(!keys.includes(viewingKey))keys.push(viewingKey);
  keys.sort().reverse();
  $('monthsTabs').innerHTML=keys.map(k=>{
    const [y,m]=k.split('-');
    return `<div class="month-tab${k===viewingKey?' active':''}" role="button" tabindex="0" data-key="${k}" onclick="setViewMonth('${k}')">${esc(T.months[+m-1])} ${y}</div>`;
  }).join('');
}
function setViewMonth(key){
  viewingKey=key;catFilter='all';
  const box=$('monthsTabs');
  box.querySelectorAll('.month-tab').forEach(x=>x.classList.toggle('active',x.dataset.key===key));
  const t=box.querySelector('.month-tab.active');
  if(t&&box.scrollTo)box.scrollTo({left:Math.max(0,t.offsetLeft-20),behavior:'smooth'});
  renderActivity();
}
function pickMonth(key){setViewMonth(key);window.scrollTo({top:0,behavior:'smooth'})}
function setTypeFilter(t){typeFilter=t;catFilter='all';haptic(6);renderActivity()}
function toggleCatFilter(c){catFilter=catFilter===c?'all':c;haptic(6);renderActivity()}
function clearCatFilter(){catFilter='all';renderActivity()}

function visibleTx(all){
  let e=typeFilter==='out'?all.filter(x=>!isIn(x)):typeFilter==='in'?all.filter(isIn):all;
  if(catFilter!=='all')e=e.filter(x=>x.cat===catFilter);
  return e;
}

function renderActivity(){
  const all=getExp(viewingKey);
  const inc=sumAmt(all.filter(isIn)),out=sumAmt(all.filter(x=>!isIn(x))),net=inc-out;
  // riepilogo del mese: serve anche da filtro per tipo
  const nt=$('stNet');nt.textContent=fmtSigned(net);nt.className='st-val '+(net<0?'neg':net>0?'pos':'');
  $('stIn').textContent=fmtMoney(inc);
  $('stOut').textContent=fmtMoney(out);
  document.querySelectorAll('.stat-tab').forEach(b=>{
    const on=b.dataset.type===typeFilter;
    b.classList.toggle('active',on);b.setAttribute('aria-pressed',on?'true':'false');
  });
  renderBreakdown(all,inc,out);
  // elenco movimenti (filtrato per tipo e categoria)
  const e=visibleTx(all),hl=$('historyList');
  hl.innerHTML=e.length
    ?e.slice().reverse().map(x=>txRow(x,viewingKey===curKey())).join('')
    :`<div class="empty">${esc(T.noTxHist)}</div>`;
  const cc=$('clearCat');
  if(catFilter!=='all'){cc.style.display='';cc.textContent=(catIcons[catFilter]||'')+' '+(T.cats[catFilter]||catFilter)+'  ✕';}
  else cc.style.display='none';
  renderTrend();
}

function renderBreakdown(all,inc,out){
  const svg=$('donutSvg'),list=$('catList');
  const r=74,cx=100,cy=100,circ=2*Math.PI*r,sw=26;
  let rows=[],total=0;
  if(typeFilter==='all'){
    // vista generale: entrate contro uscite
    total=inc+out;
    $('breakTitle').textContent=T.incVsExp;
    $('donutLabel').textContent=T.balance;
    $('donutTotal').textContent=fmtSigned(inc-out);
    if(inc)rows.push({cls:'cat-flow-in',icon:'<i class="fas fa-arrow-down"></i>',label:T.income,val:inc,color:'#16A34A',click:"setTypeFilter('in')"});
    if(out)rows.push({cls:'cat-flow-out',icon:'<i class="fas fa-arrow-up"></i>',label:T.expenses,val:out,color:'#EF4444',click:"setTypeFilter('out')"});
  }else{
    // vista per tipo: distribuzione per categoria (tocca una riga per filtrare l'elenco)
    const wantIn=typeFilter==='in',src=all.filter(x=>isIn(x)===wantIn),by={};
    src.forEach(x=>{by[x.cat]=(by[x.cat]||0)+x.amount});
    total=sumAmt(src);
    $('breakTitle').textContent=wantIn?T.catIn:T.catOut;
    $('donutLabel').textContent=wantIn?T.totalIn:T.totalOut;
    $('donutTotal').textContent=fmtMoney(total);
    rows=Object.entries(by).sort((a,b)=>b[1]-a[1]).map(([cat,val])=>({
      cls:catClass[cat]||'cat-other',icon:catIcons[cat]||'📦',label:T.cats[cat]||cat,val,
      color:catColors[cat]||'#999',click:`toggleCatFilter('${cat}')`,sel:catFilter===cat
    }));
  }
  let paths=`<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" style="stroke:var(--line)" stroke-width="${sw}"/>`;
  if(!total){
    svg.innerHTML=paths;
    list.innerHTML=`<div class="empty">${esc(T.noData)}</div>`;
    return;
  }
  const gap=rows.length>1?2:0;let offset=0;
  rows.forEach(rw=>{
    const dash=rw.val/total*circ;
    paths+=`<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${rw.color}" stroke-width="${sw}" stroke-dasharray="${Math.max(dash-gap,0.5)} ${circ}" stroke-dashoffset="${-offset}"/>`;
    offset+=dash;
  });
  svg.innerHTML=paths;
  list.innerHTML=rows.map(rw=>{
    const p=rw.val/total*100;
    return `<div class="cat-row ${rw.cls}${rw.sel?' sel':''}" role="button" tabindex="0" onclick="${rw.click}">
      <div class="cat-row-top">
        <div class="tx-icon ${rw.cls}">${rw.icon}</div>
        <div class="tx-info"><div class="tx-cat">${esc(rw.label)}</div><div class="tx-sub">${p.toFixed(1)}%</div></div>
        <div class="cat-row-val">${fmtMoney(rw.val)}</div>
      </div>
      <div class="bar-track"><div class="bar-fill" style="width:${p.toFixed(1)}%;background:var(--c)"></div></div>
    </div>`;}).join('');
}

// andamento mensile: entrate e uscite affiancate (ultimi 6 mesi); tocca un mese per aprirlo
function renderTrend(){
  const keys=allKeys();if(!keys.includes(curKey()))keys.push(curKey());
  keys.sort();
  const data=keys.slice(-6).map(k=>{
    const e=getExp(k);
    return{key:k,label:T.months[+k.split('-')[1]-1].slice(0,3),inc:sumAmt(e.filter(isIn)),out:sumAmt(e.filter(x=>!isIn(x)))};
  });
  const mx=Math.max(...data.flatMap(d=>[d.inc,d.out]),1);
  const h=v=>v?Math.max(6,v/mx*120):3;
  $('monthlyBars').innerHTML=`<div class="trend">`+data.map(d=>`
    <div class="trend-col${d.key===viewingKey?' sel':''}" role="button" tabindex="0" onclick="pickMonth('${d.key}')">
      <div class="trend-pair"><div class="trend-bar in" style="height:${h(d.inc)}px"></div><div class="trend-bar" style="height:${h(d.out)}px"></div></div>
      <div class="trend-lbl">${esc(d.label)}</div>
    </div>`).join('')+`</div>`;
}

/* ══════════════════════════════════════
   ADD
══════════════════════════════════════ */
function buildCatGrid(){
  const keys=addType==='in'?INCOME_KEYS:EXPENSE_KEYS;
  $('catGrid').innerHTML=keys.map(k=>`<div class="cat-btn${k===selectedCat?' selected':''}" data-cat="${k}" onclick="selectCat(this)" role="button" tabindex="0"><span class="cat-icon">${catIcons[k]}</span><span class="cat-lbl">${esc(T.cats[k]||k)}</span></div>`).join('');
  $('descWrap').classList.toggle('open',needsDesc(selectedCat));
}
function applyAddType(){
  const inc=addType==='in';
  $('add').classList.toggle('is-in',inc);
  document.querySelectorAll('.type-btn').forEach(b=>{
    const on=b.dataset.type===addType;
    b.classList.toggle('active',on);b.setAttribute('aria-pressed',on?'true':'false');
  });
  const tt=inc?T.addTitleIn:T.addTitle;
  $('lbl-add-title').innerHTML=esc(tt[0])+'<span>'+esc(tt[1])+'</span>';
  $('btn-add-expense').textContent=inc?T.addBtnIn:T.addBtn;
  $('lbl-recurring').textContent=inc?T.recurringIn:T.recurring;
  buildCatGrid();
}
function setAddType(t){
  if(t===addType)return;
  addType=t;selectedCat=t==='in'?'Salary':'Groceries';
  $('desc').value='';haptic(6);
  applyAddType();
}
function addTransaction(){
  const v=parseFloat($('amount').value);
  if(isNaN(v)||v<=0)return;
  applyRecurring(); // prima le ricorrenti già salvate, così la nuova non viene duplicata
  const type=addType;
  const description=needsDesc(selectedCat)?$('desc').value.trim():'';
  const isRec=$('recurring').checked;
  const e=getExp();
  e.push({amount:v,cat:selectedCat,date:uniqueDate(e),desc:description,recurring:isRec,type});
  saveExp(e);
  if(isRec){const recs=readJSON('recurring',[]);recs.push({amount:v,cat:selectedCat,desc:description,type});lsSet('recurring',JSON.stringify(recs));
    lsSet('rec_applied_'+curKey(),'1'); // questo movimento è già nel mese corrente: non va riapplicato
  }
  $('amount').value='';$('desc').value='';
  $('recurring').checked=false;
  addType='out';selectedCat='Groceries';applyAddType();
  showConfirm();show('home','nav-home');load();refreshActivityIfVisible();
}

function applyRecurring(){
  if(lsGet('rec_applied_'+curKey()))return;
  const recs=readJSON('recurring',[]);if(!recs.length)return;
  const e=getExp();
  recs.forEach(r=>e.push({amount:r.amount,cat:r.cat,date:uniqueDate(e),desc:r.desc||'',recurring:true,type:r.type==='in'?'in':'out'}));
  saveExp(e);lsSet('rec_applied_'+curKey(),'1');
}

function saveBudget(){
  const v=parseFloat($('budget').value);
  if(!isNaN(v)&&v>=0)lsSet('b_'+curKey(),v);
  haptic(10);load();
  const saved=$('budgetSaved');
  if(saved){saved.style.display='block';setTimeout(()=>saved.style.display='none',2000);}
}

function resetAll(){
  if(!confirm(T.confirmDeleteAll))return;
  // cancella i dati, ma conserva le preferenze (lingua e tema)
  const keep=new Set(['lang','theme','accent','accentVars']);
  const del=[];
  for(let i=0;i<localStorage.length;i++){const k=localStorage.key(i);if(k&&!keep.has(k))del.push(k);}
  del.forEach(k=>localStorage.removeItem(k));
  location.reload();
}

/* ══════════════════════════════════════
   SETTINGS
══════════════════════════════════════ */
function renderSettings(){
  const thr=getThreshold();
  $('thresholdSlider').value=thr;paintSlider();
  $('thresholdDisplay').textContent=thr+'%';
  const b=getBudget();$('budget').value=b||'';
  document.querySelectorAll('.lang-btn').forEach(x=>x.classList.toggle('active',x.dataset.lang===currentLang));
  renderThemeButtons();renderAccentUI();
  const recs=readJSON('recurring',[]);
  const rl=$('recurringList');
  if(!recs.length){rl.innerHTML=`<div class="empty">${esc(T.noRecurringTx)}</div>`;}
  else{rl.innerHTML=recs.map((r,i)=>`
    <div class="tx-row">
      <div class="tx-icon ${catClass[r.cat]||'cat-other'}">${catIcons[r.cat]||'📦'}</div>
      <div class="tx-info"><div class="tx-cat">${esc(T.cats[r.cat]||r.cat)}</div><div class="tx-sub">${esc(r.desc||T.recBadge)}</div></div>
      <div class="tx-amount${r.type==='in'?' in':''}">${r.type==='in'?'+':'−'}${fmtMoney(r.amount)}</div>
      <div class="tx-edit-btn del" role="button" tabindex="0" aria-label="${esc(T.deleteBtn)}" onclick="deleteRecurring(${i})"><i class="fas fa-xmark"></i></div>
    </div>`).join('');}
  setTimeout(()=>animateTutSteps(document.querySelector('.tut-tab.active')&&document.querySelector('.tut-tab.active').textContent.includes('Chrome')?'tut-chrome-steps':'tut-safari-steps'),100);
}

function paintSlider(){const s=$('thresholdSlider');s.style.setProperty('--fill',((s.value-s.min)/(s.max-s.min)*100)+'%')}
function updateThreshold(v){lsSet('warnThreshold',v);paintSlider();$('thresholdDisplay').textContent=v+'%';load();}
function deleteRecurring(i){const recs=readJSON('recurring',[]);recs.splice(i,1);lsSet('recurring',JSON.stringify(recs));renderSettings();}

/* ══════════════════════════════════════
   SHEET
══════════════════════════════════════ */
function openSheet(date){
  const e=getExp(viewingKey),item=e.find(x=>x.date===date);if(!item)return;
  editingDate=date;$('editAmount').value=item.amount;
  const dg=$('editDescGroup'),ed=$('editDesc');
  if(needsDesc(item.cat)){dg.style.display='block';ed.value=item.desc||'';}else{dg.style.display='none';ed.value='';}
  $('sheetOverlay').classList.add('open');$('sheet').classList.add('open');haptic(8);
}
function closeSheet(){$('sheetOverlay').classList.remove('open');$('sheet').classList.remove('open');editingDate=null;}
function saveEdit(){
  const v=parseFloat($('editAmount').value);if(isNaN(v)||v<=0)return;
  const e=getExp(viewingKey),idx=e.findIndex(x=>x.date===editingDate);if(idx===-1)return;
  e[idx].amount=v;if(needsDesc(e[idx].cat))e[idx].desc=$('editDesc').value.trim();
  saveExp(e,viewingKey);closeSheet();haptic(10);renderActivity();load();
}
function deleteExpense(){
  if(!confirm(T.confirmDeleteTx))return;
  saveExp(getExp(viewingKey).filter(x=>x.date!==editingDate),viewingKey);
  closeSheet();haptic([20,50,20]);renderActivity();load();
}
function refreshActivityIfVisible(){
  const el=$('activityPage');
  if(el&&el.classList.contains('active'))renderActivity();
}

/* ══════════════════════════════════════
   EXPORT
══════════════════════════════════════ */
function csvCell(v){
  let s=String(v==null?'':v);
  if(/^[=+\-@\t\r]/.test(s))s="'"+s; // evita l'esecuzione di formule in Excel/Sheets
  return '"'+s.replace(/"/g,'""')+'"';
}
function exportCSV(){
  const keys=allKeys();
  if(!keys.some(k=>getExp(k).length)){alert(T.noExportTx);return;}
  let csv=T.csvHeadersTx+'\n';
  keys.forEach(k=>{getExp(k).forEach(x=>{
    const d=new Date(x.date),ds=d.getDate().toString().padStart(2,'0')+'/'+(d.getMonth()+1).toString().padStart(2,'0')+'/'+d.getFullYear();
    csv+=[ds,csvCell(T.cats[x.cat]||x.cat),x.amount.toFixed(2),csvCell(x.desc),x.recurring?T.csvYes:T.csvNo,csvCell(isIn(x)?T.csvIn:T.csvOut)].join(',')+'\n';
  });});
  const blob=new Blob(['\ufeff'+csv],{type:'text/csv;charset=utf-8'}); // BOM: Excel legge bene accenti e €
  const url=URL.createObjectURL(blob),a=document.createElement('a');
  a.href=url;a.download='moneyflow_export.csv';document.body.appendChild(a);a.click();a.remove();
  setTimeout(()=>URL.revokeObjectURL(url),1000);haptic(15);
}

/* ══════════════════════════════════════
   TUTORIAL
══════════════════════════════════════ */
function switchTutTab(tab,el){
  document.querySelectorAll('.tut-tab').forEach(x=>x.classList.remove('active'));
  document.querySelectorAll('.tut-panel').forEach(x=>x.classList.remove('active'));
  el.classList.add('active');$('tut-'+tab).classList.add('active');
  animateTutSteps('tut-'+tab+'-steps');
}
function animateTutSteps(id){
  const steps=document.querySelectorAll('#'+id+' .tut-step');
  steps.forEach(s=>s.classList.remove('visible'));
  steps.forEach((s,i)=>setTimeout(()=>s.classList.add('visible'),i*130));
}


/* ══════════════════════════════════════
   COMPORTAMENTO "DA APP": niente zoom
══════════════════════════════════════ */
// iOS Safari ignora user-scalable=no: blocchiamo pinch e gesture a mano
['gesturestart','gesturechange','gestureend'].forEach(t=>document.addEventListener(t,e=>e.preventDefault(),{passive:false}));
document.addEventListener('touchmove',e=>{if(e.touches&&e.touches.length>1)e.preventDefault()},{passive:false});
document.addEventListener('contextmenu',e=>{if(matchMedia('(pointer: coarse)').matches&&!/^(INPUT|TEXTAREA)$/.test(e.target.tagName))e.preventDefault()});

/* ══════════════════════════════════════
   PWA: service worker + pulsante "Installa"
══════════════════════════════════════ */
let deferredInstall=null;
function showInstall(on){const c=$('installCard');if(c)c.style.display=on?'block':'none'}
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredInstall=e;showInstall(true)});
window.addEventListener('appinstalled',()=>{deferredInstall=null;showInstall(false)});
async function installApp(){
  if(!deferredInstall)return;
  deferredInstall.prompt();
  try{await deferredInstall.userChoice}catch(e){}
  deferredInstall=null;showInstall(false);
}
if('serviceWorker' in navigator&&/^https?:$/.test(location.protocol)){
  window.addEventListener('load',()=>{navigator.serviceWorker.register('sw.js').catch(()=>{})});
}

/* ══════════════════════════════════════
   ACCESSIBILITY + INIT
══════════════════════════════════════ */
// gli elementi con role="button" rispondono anche a Invio / Spazio
document.addEventListener('keydown',ev=>{
  if((ev.key==='Enter'||ev.key===' ')&&ev.target&&ev.target.getAttribute&&ev.target.getAttribute('role')==='button'){
    ev.preventDefault();ev.target.click();
  }
});
// app lasciata aperta (PWA): al ritorno aggiorna dati e applica le ricorrenti di un eventuale nuovo mese
document.addEventListener('visibilitychange',()=>{if(!document.hidden)load();});

function initApp(){
  applyTheme();
  renderAccentUI();
  migrateMonthKeys();
  applyLang();
  renderThemeButtons();
  load();
}
if(document.readyState==='loading'){
  document.addEventListener('DOMContentLoaded',initApp);
}else{
  initApp();
}