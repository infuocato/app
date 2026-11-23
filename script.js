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

const catIcons={Groceries:'🛒',Transport:'🚌',Home:'🏠',Fun:'🎮',Other:'📦'};
const catClass={Groceries:'cat-food',Transport:'cat-transport',Home:'cat-house',Fun:'cat-fun',Other:'cat-other'};
const catColors={Groceries:'#F97316',Transport:'#3B82F6',Home:'#22C55E',Fun:'#8B5CF6',Other:'#EC4899'};

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
let currentFilter='all';
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
  const m=document.querySelector('meta[name="theme-color"]');
  if(m)m.setAttribute('content',t==='dark'?'#4A27A8':'#8B5CF6');
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
  s('lbl-your-money',T.yourMoney); s('lbl-budget',T.monthlyBudget);
  s('lbl-last-expenses',T.lastExpenses); s('lnk-view-all',T.viewAll);
  s('lbl-shopping-list',T.shoppingList); s('lbl-add-item',T.addItem);
  $('shopDesc').placeholder=T.shopDescPlaceholder;
  // add
  h('lbl-add-title',esc(T.addTitle[0])+'<span>'+esc(T.addTitle[1])+'</span>');
  s('lbl-amount',T.amount); s('lbl-category',T.category); s('lbl-description',T.description);
  $('desc').placeholder=T.descPlaceholder;
  s('lbl-recurring',T.recurring); s('lbl-recurring-sub',T.recurringSub);
  s('btn-add-expense',T.addBtn);
  document.querySelectorAll('.cat-btn').forEach(btn=>{
    const lbl=btn.querySelector('.cat-lbl');
    if(lbl&&T.cats[btn.dataset.cat]) lbl.textContent=T.cats[btn.dataset.cat];
  });
  // history / stats / settings titles
  h('lbl-history-title',esc(T.historyTitle[0])+'<span>'+esc(T.historyTitle[1])+'</span>');
  h('lbl-stats-title',esc(T.statsTitle[0])+'<span>'+esc(T.statsTitle[1])+'</span>');
  s('lbl-cat-dist',T.catDist); s('lbl-monthly-trend',T.monthlyTrend); s('lbl-total-exp',T.totalExp);
  h('lbl-settings-title',esc(T.settingsTitle[0])+'<span>'+esc(T.settingsTitle[1])+'</span>');
  s('lbl-language',T.language);
  s('lbl-appearance',T.appearance);
  s('theme-lbl-light',T.themeLight); s('theme-lbl-dark',T.themeDark); s('theme-lbl-auto',T.themeAuto);
  s('lbl-monthly-budget',T.monthlyBudget); s('lbl-budget-saved',T.budgetSaved); s('btn-save-budget',T.saveBudget);
  s('lbl-warn-threshold',T.warnThreshold); s('lbl-warn-sub',T.warnSub);
  s('lbl-recurring-expenses',T.recurringExpenses);
  s('lbl-tutorial-title',T.tutorialTitle);
  s('lbl-delete-sub',T.deleteSub);
  h('btn-delete-all','<i class="fas fa-trash-can"></i> '+esc(T.deleteAll));
  // nav
  s('nav-lbl-home',T.navHome); s('nav-lbl-hist',T.navHist);
  s('nav-lbl-stats',T.navStats); s('nav-lbl-set',T.navSet);
  // sheet
  s('lbl-edit-expense',T.editExpense); s('lbl-edit-amount',T.editAmount); s('lbl-edit-desc',T.editDesc);
  s('lbl-delete',T.deleteBtn); s('lbl-save',T.saveBtn);
  // tutorial
  ['s1','s2','s3','s4','c1','c2','c3','c4'].forEach(k=>{
    const K=k[0].toUpperCase()+k.slice(1);
    s('tut-'+k+'-title',T['tut'+K+'Title']); s('tut-'+k+'-desc',T['tut'+K+'Desc']);
  });
  s('tut-safari-tip',T.tutSafariTip); s('tut-chrome-tip',T.tutChromeTip);
  buildFilterChips();
}

function buildFilterChips(){
  const fc=$('filterChips');
  if(!fc) return;
  const chip=(cat,label)=>`<div class="filter-chip${currentFilter===cat?' active':''}" role="button" tabindex="0" data-cat="${cat}" onclick="filterExp(this)">${label}</div>`;
  fc.innerHTML=chip('all',esc(T.allCats))+T.catKeys.map(k=>chip(k,catIcons[k]+' '+esc(T.cats[k]))).join('');
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
  if(id==='historyPage'){buildMonthTabs();renderHistory();}
  if(id==='statsPage')renderStats();
  if(id==='settingsPage')renderSettings();
}

function selectCat(el){
  document.querySelectorAll('.cat-btn').forEach(x=>x.classList.remove('selected'));
  el.classList.add('selected');selectedCat=el.dataset.cat;
  const wrap=$('descWrap');
  if(selectedCat==='Other'){wrap.classList.add('open');}
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
  const e=getExp(),b=getBudget(),t=e.reduce((a,x)=>a+x.amount,0);
  const residuo=b-t,pct=b?Math.min(100,t/b*100):0,thr=getThreshold();
  const state=!b?'idle':residuo<=0?'empty':pct>=90?'danger':pct>=thr?'warn':'ok';

  $('homeMonth').textContent=monthLabel();
  $('perc').textContent=pct.toFixed(0)+'%';
  $('spent').textContent=fmtMoney(t);
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
  l3.innerHTML=last.length?last.map(x=>txRow(x,false)).join(''):`<div class="empty">${esc(T.noExpenses)}</div>`;
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
  e.push({amount:item.amount,cat:item.cat,date:uniqueDate(e),desc:item.desc,recurring:false});
  saveExp(e);
  list.splice(idx,1);saveShopping(list);
  showConfirm();
  load();refreshStatsIfVisible();
}

function deleteShoppingItem(id){
  saveShopping(getShopping().filter(x=>x.id!==id));haptic(10);renderShoppingList();
}

function txRow(x,editable){
  const d=new Date(x.date);
  const ds=d.getDate().toString().padStart(2,'0')+'/'+(d.getMonth()+1).toString().padStart(2,'0');
  const sub=x.desc?esc(x.desc):ds;
  const recBadge=x.recurring?`<span class="recurring-badge">${esc(T.recBadge)}</span>`:'';
  const editBtn=editable?`<div class="tx-edit-btn" role="button" tabindex="0" aria-label="${esc(T.editLbl)}" onclick="openSheet(${x.date})"><i class="fas fa-pencil"></i></div>`:'';
  return `<div class="tx-row" data-date="${x.date}">
    <div class="tx-icon ${catClass[x.cat]||'cat-other'}">${catIcons[x.cat]||'📦'}</div>
    <div class="tx-info"><div class="tx-cat">${esc(T.cats[x.cat]||x.cat)}${recBadge}</div><div class="tx-sub">${sub}</div></div>
    <div class="tx-amount">${fmtMoney(x.amount)}</div>${editBtn}
  </div>`;
}

/* ══════════════════════════════════════
   HISTORY
══════════════════════════════════════ */
function buildMonthTabs(){
  const keys=allKeys();if(!keys.includes(curKey()))keys.push(curKey());
  keys.sort().reverse();
  $('monthsTabs').innerHTML=keys.map(k=>{
    const [y,m]=k.split('-');
    return `<div class="month-tab${k===viewingKey?' active':''}" role="button" tabindex="0" onclick="switchViewMonth('${k}',this)">${esc(T.months[+m-1])} ${y}</div>`;
  }).join('');
}
function switchViewMonth(key,el){
  viewingKey=key;
  document.querySelectorAll('.month-tab').forEach(x=>x.classList.remove('active'));el.classList.add('active');
  currentFilter='all';
  document.querySelectorAll('.filter-chip').forEach(x=>x.classList.toggle('active',x.dataset.cat==='all'));
  renderHistory();
}
function renderHistory(){
  const all=getExp(viewingKey),e=currentFilter==='all'?all:all.filter(x=>x.cat===currentFilter);
  const total=e.reduce((s,x)=>s+x.amount,0);
  $('categoryTotal').textContent=fmtMoney(total);
  $('categoryLabel').textContent=currentFilter==='all'?T.allCats:(T.cats[currentFilter]||currentFilter);
  const hl=$('historyList');
  if(!e.length){hl.innerHTML=`<div class="empty">${esc(T.noExpensesHist)}</div>`;return;}
  hl.innerHTML=e.slice().reverse().map(x=>txRow(x,viewingKey===curKey())).join('');
}
function filterExp(el){
  document.querySelectorAll('.filter-chip').forEach(x=>x.classList.remove('active'));
  el.classList.add('active');currentFilter=el.dataset.cat;renderHistory();
}

/* ══════════════════════════════════════
   ADD
══════════════════════════════════════ */
function addExpense(){
  const v=parseFloat($('amount').value);
  if(isNaN(v)||v<=0)return;
  applyRecurring(); // prima le ricorrenti già salvate, così la nuova non viene duplicata
  const description=selectedCat==='Other'?$('desc').value.trim():'';
  const isRec=$('recurring').checked;
  const e=getExp();
  e.push({amount:v,cat:selectedCat,date:uniqueDate(e),desc:description,recurring:isRec});
  saveExp(e);
  if(isRec){const recs=readJSON('recurring',[]);recs.push({amount:v,cat:selectedCat,desc:description});lsSet('recurring',JSON.stringify(recs));
    lsSet('rec_applied_'+curKey(),'1'); // questa spesa è già nel mese corrente: non va riapplicata
  }
  $('amount').value='';$('desc').value='';
  $('recurring').checked=false;
  document.querySelectorAll('.cat-btn').forEach(x=>x.classList.remove('selected'));
  document.querySelector('.cat-btn[data-cat="Groceries"]').classList.add('selected');
  selectedCat='Groceries';$('descWrap').classList.remove('open');
  showConfirm();show('home','nav-home');load();refreshStatsIfVisible();
}

function applyRecurring(){
  if(lsGet('rec_applied_'+curKey()))return;
  const recs=readJSON('recurring',[]);if(!recs.length)return;
  const e=getExp();
  recs.forEach(r=>e.push({amount:r.amount,cat:r.cat,date:uniqueDate(e),desc:r.desc||'',recurring:true}));
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
  const keep=new Set(['lang','theme']);
  const del=[];
  for(let i=0;i<localStorage.length;i++){const k=localStorage.key(i);if(k&&!keep.has(k))del.push(k);}
  del.forEach(k=>localStorage.removeItem(k));
  location.reload();
}

/* ══════════════════════════════════════
   STATS
══════════════════════════════════════ */
function renderStats(){
  $('statsMonth').textContent=monthLabel();
  const e=getExp(),totByCat={};
  e.forEach(x=>{totByCat[x.cat]=(totByCat[x.cat]||0)+x.amount});
  const total=Object.values(totByCat).reduce((a,b)=>a+b,0);
  const svg=$('donutSvg'),list=$('catList');
  const r=74,cx=100,cy=100,circ=2*Math.PI*r,sw=26;
  $('donutTotal').textContent=fmtMoney(total);
  let paths=`<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" style="stroke:var(--line)" stroke-width="${sw}"/>`;
  if(!total){
    svg.innerHTML=paths;
    list.innerHTML=`<div class="empty">${esc(T.noData)}</div>`;
  }else{
    const entries=Object.entries(totByCat).sort((a,b)=>b[1]-a[1]);
    const gap=entries.length>1?2:0;let offset=0;
    entries.forEach(([cat,val])=>{
      const dash=val/total*circ;
      paths+=`<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${catColors[cat]||'#999'}" stroke-width="${sw}" stroke-dasharray="${Math.max(dash-gap,0.5)} ${circ}" stroke-dashoffset="${-offset}"/>`;
      offset+=dash;
    });
    svg.innerHTML=paths;
    list.innerHTML=entries.map(([cat,val])=>{
      const p=val/total*100;
      return `<div class="cat-row ${catClass[cat]||'cat-other'}">
        <div class="cat-row-top">
          <div class="tx-icon ${catClass[cat]||'cat-other'}">${catIcons[cat]||'📦'}</div>
          <div class="tx-info"><div class="tx-cat">${esc(T.cats[cat]||cat)}</div><div class="tx-sub">${p.toFixed(1)}%</div></div>
          <div class="cat-row-val">${fmtMoney(val)}</div>
        </div>
        <div class="bar-track"><div class="bar-fill" style="width:${p.toFixed(1)}%;background:var(--c)"></div></div>
      </div>`;}).join('');
  }
  // andamento mensile (ultimi 6 mesi, incluso quello corrente)
  const keys=allKeys();if(!keys.includes(curKey()))keys.push(curKey());
  keys.sort();
  const monthData=keys.slice(-6).map(k=>{
    const t=getExp(k).reduce((a,x)=>a+x.amount,0),m=+k.split('-')[1];
    return{key:k,label:T.months[m-1].slice(0,3),total:t};
  });
  const maxM=Math.max(...monthData.map(x=>x.total),1);
  $('monthlyBars').innerHTML=`<div class="trend">`+monthData.map(m=>`
    <div class="trend-col${m.key===curKey()?' now':''}">
      <div class="trend-val">${fmtShort(m.total)}</div>
      <div class="trend-bar" style="height:${Math.max(6,m.total/maxM*110)}px"></div>
      <div class="trend-lbl">${esc(m.label)}</div>
    </div>`).join('')+`</div>`;
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
  renderThemeButtons();
  const recs=readJSON('recurring',[]);
  const rl=$('recurringList');
  if(!recs.length){rl.innerHTML=`<div class="empty">${esc(T.noRecurring)}</div>`;}
  else{rl.innerHTML=recs.map((r,i)=>`
    <div class="tx-row">
      <div class="tx-icon ${catClass[r.cat]||'cat-other'}">${catIcons[r.cat]||'📦'}</div>
      <div class="tx-info"><div class="tx-cat">${esc(T.cats[r.cat]||r.cat)}</div><div class="tx-sub">${esc(r.desc||T.recBadge)}</div></div>
      <div class="tx-amount">${fmtMoney(r.amount)}</div>
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
  if(item.cat==='Other'){dg.style.display='block';ed.value=item.desc||'';}else{dg.style.display='none';ed.value='';}
  $('sheetOverlay').classList.add('open');$('sheet').classList.add('open');haptic(8);
}
function closeSheet(){$('sheetOverlay').classList.remove('open');$('sheet').classList.remove('open');editingDate=null;}
function saveEdit(){
  const v=parseFloat($('editAmount').value);if(isNaN(v)||v<=0)return;
  const e=getExp(viewingKey),idx=e.findIndex(x=>x.date===editingDate);if(idx===-1)return;
  e[idx].amount=v;if(e[idx].cat==='Other')e[idx].desc=$('editDesc').value.trim();
  saveExp(e,viewingKey);closeSheet();haptic(10);renderHistory();load();refreshStatsIfVisible();
}
function deleteExpense(){
  if(!confirm(T.confirmDeleteExp))return;
  saveExp(getExp(viewingKey).filter(x=>x.date!==editingDate),viewingKey);
  closeSheet();haptic([20,50,20]);renderHistory();load();refreshStatsIfVisible();
}
function refreshStatsIfVisible(){
  const statsEl=$('statsPage');
  if(statsEl&&statsEl.classList.contains('active'))renderStats();
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
  if(!keys.some(k=>getExp(k).length)){alert(T.noExportData);return;}
  let csv=T.csvHeaders+'\n';
  keys.forEach(k=>{getExp(k).forEach(x=>{
    const d=new Date(x.date),ds=d.getDate().toString().padStart(2,'0')+'/'+(d.getMonth()+1).toString().padStart(2,'0')+'/'+d.getFullYear();
    csv+=[ds,csvCell(T.cats[x.cat]||x.cat),x.amount.toFixed(2),csvCell(x.desc),x.recurring?T.csvYes:T.csvNo].join(',')+'\n';
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
